import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuramos las exclusiones clave para Vite/React
const EXCLUIR_CARPETAS = new Set(['node_modules', '.git', 'dist', 'build', 'public', '.vscode']);

// Excluimos los archivos de bloqueo, el reporte generado y este mismo script dinámicamente
const EXCLUIR_ARCHIVOS = new Set([
  'package-lock.json', 
  'pnpm-lock.yaml', 
  'yarn.lock', 
  '.DS_Store', 
  'codigo_completo.txt',
  path.basename(fileURLToPath(import.meta.url)) 
]);

// Extensiones de código fuente que nos interesa compilar
const EXTENSIONES_PERMITIDAS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html', '.json'];

function generarReporte() {
    const archivoSalida = 'codigo_completo.txt';
    
    // 1. Escribimos el encabezado del reporte
    fs.writeFileSync(archivoSalida, "=== ESTRUCTURA DEL PROYECTO ===\n", 'utf-8');

    // Función recursiva para escribir el árbol (similar a os.walk en Python)
    function escribirArbol(dir, nivel = 0) {
        const indentacion = '    '.repeat(nivel);
        const nombreDir = path.basename(dir) || '.';
        
        if (nivel > 0) {
            fs.appendFileSync(archivoSalida, `${indentacion}${nombreDir}/\n`, 'utf-8');
        }

        let elementos;
        try {
            elementos = fs.readdirSync(dir, { withFileTypes: true });
        } catch (error) {
            return;
        }

        const subIndentacion = '    '.repeat(nivel + 1);
        
        for (const elemento of elementos) {
            if (elemento.isDirectory()) {
                if (!EXCLUIR_CARPETAS.has(elemento.name)) {
                    escribirArbol(path.join(dir, elemento.name), nivel + 1);
                }
            } else {
                if (!EXCLUIR_ARCHIVOS.has(elemento.name)) {
                    fs.appendFileSync(archivoSalida, `${subIndentacion}${elemento.name}\n`, 'utf-8');
                }
            }
        }
    }

    escribirArbol('.');

    // 2. Separador para la sección de contenido
    fs.appendFileSync(archivoSalida, "\n=== CONTENIDO DE LOS ARCHIVOS ===\n\n", 'utf-8');

    function escribirContenido(dir) {
        let elementos;
        try {
            elementos = fs.readdirSync(dir, { withFileTypes: true });
        } catch (error) {
            return;
        }
        
        for (const elemento of elementos) {
            const rutaCompleta = path.join(dir, elemento.name);
            
            if (elemento.isDirectory()) {
                if (!EXCLUIR_CARPETAS.has(elemento.name)) {
                    escribirContenido(rutaCompleta);
                }
            } else {
                const ext = path.extname(elemento.name);
                
                // Filtramos por archivos excluidos y extensiones permitidas
                if (!EXCLUIR_ARCHIVOS.has(elemento.name) && EXTENSIONES_PERMITIDAS.includes(ext)) {
                    fs.appendFileSync(archivoSalida, `// FILE: ${rutaCompleta}\n`, 'utf-8');
                    fs.appendFileSync(archivoSalida, "-".repeat(50) + "\n", 'utf-8');
                    
                    try {
                        const contenido = fs.readFileSync(rutaCompleta, 'utf-8');
                        fs.appendFileSync(archivoSalida, contenido + "\n", 'utf-8');
                    } catch (e) {
                        fs.appendFileSync(archivoSalida, `[Error leyendo archivo: ${e.message}]\n`, 'utf-8');
                    }
                    
                    fs.appendFileSync(archivoSalida, "\n\n" + "=".repeat(80) + "\n\n", 'utf-8');
                }
            }
        }
    }

    escribirContenido('.');
    console.log(`¡Listo! Archivo creado con éxito: ${archivoSalida}`);
}

generarReporte();