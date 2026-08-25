import fs from 'fs';

const menuPath = 'src/data/menu.ts';
let content = fs.readFileSync(menuPath, 'utf8');

// The uniform background prompt that matches the real restaurant's cute & inviting bistro vibe
const bgPrompt = " on a wooden table, cute and inviting bistro cafe interior background, warm lighting, hyperrealistic food photography, unedited, 50mm lens, highly detailed, matching aesthetic";

// Remove the `img` function definition
content = content.replace(/\/\/ Image source[\s\S]*?const img = \(prompt: string\) => \{[\s\S]*?\};\n\n/m, '');

let lines = content.split('\n');
let currentId = null;

for (let i = 0; i < lines.length; i++) {
  const idMatch = lines[i].match(/id:\s*"([^"]+)"/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  
  // Also support the ones we previously changed if we run it again
  const imageMatch = lines[i].match(/image:\s*(img\(|"\/(images|https).*)/);
  if (imageMatch && currentId) {
    // If it still uses img("..."), we need to extract the prompt
    let prompt = "";
    let j = i;
    if (lines[i].includes('img(')) {
        while (j < lines.length && !lines[j].includes('),')) {
            const pMatch = lines[j].match(/"([^"]+)"/);
            if (pMatch) prompt += pMatch[1];
            j++;
        }
        const pMatch = lines[j].match(/"([^"]+)"/);
        if (pMatch) prompt += pMatch[1];
    } else {
        // We already replaced it, maybe we want to re-replace it. 
        // But since we want all of them to be consistent, we might not have the original prompt here.
        // Let's just use a basic prompt based on ID if we lost the original prompt.
        prompt = currentId.replace(/-/g, ' ') + " dish"; 
    }

    // To be perfectly safe, let's just restore the original menu.ts from a clean state or 
    // rely on the fact that we haven't actually run update_menu.js yet!
    // Wait! I haven't run update_menu.js yet! So the file still has `img("...")`.
    
    // Append the consistent background
    const fullPrompt = prompt.trim().replace(/,\s*editorial food photography.*?$/, '') + bgPrompt;
    
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(fullPrompt)}?width=800&height=800&nologo=true`;
    const newImageStr = `    image: "${url}",`;

    lines.splice(i, j - i + 1, newImageStr);
    currentId = null;
  }
}

fs.writeFileSync(menuPath, lines.join('\n'));
console.log("Updated menu.ts successfully with uniform Pollinations AI images!");
