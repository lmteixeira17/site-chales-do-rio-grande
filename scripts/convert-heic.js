const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const heicConvert = require('heic-convert');

const galleryDir = path.join(__dirname, '../public/images/gallery');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);

async function convert() {
    try {
        const files = await readdir(galleryDir);
        const heicFiles = files.filter(f => f.toLowerCase().endsWith('.heic'));

        console.log(`Found ${heicFiles.length} HEIC files to convert.`);

        for (const file of heicFiles) {
            try {
                console.log(`Converting ${file}...`);
                const inputBuffer = await readFile(path.join(galleryDir, file));
                const outputBuffer = await heicConvert({
                    buffer: inputBuffer,
                    format: 'JPEG',
                    quality: 0.8
                });

                const newFilename = file.replace(/\.heic$/i, '.jpg');
                await writeFile(path.join(galleryDir, newFilename), outputBuffer);
                console.log(`Saved ${newFilename}`);
            } catch (err) {
                console.error(`Failed to convert ${file}:`, err.message);
            }
        }
        console.log('Conversion complete!');
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

convert();
