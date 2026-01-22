import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ASSETS_DIR = resolve(import.meta.dir, "../../assets");

/**
 * Load an image file and convert it to a base64 data URL
 */
export async function loadImageAsDataUrl(imagePath: string): Promise<string> {
  const fullPath = imagePath.startsWith("/") ? imagePath : resolve(ASSETS_DIR, imagePath);

  if (!existsSync(fullPath)) {
    throw new Error(`Image not found: ${fullPath}`);
  }

  const file = Bun.file(fullPath);
  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  // Determine MIME type from extension
  const ext = fullPath.split(".").pop()?.toLowerCase();
  const mimeTypes: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    webp: "image/webp",
  };

  const mimeType = mimeTypes[ext || ""] || "application/octet-stream";
  return `data:${mimeType};base64,${base64}`;
}

/**
 * Load an image file synchronously and convert it to a base64 data URL
 */
export function loadImageAsDataUrlSync(imagePath: string): string {
  const fullPath = imagePath.startsWith("/") ? imagePath : resolve(ASSETS_DIR, imagePath);

  if (!existsSync(fullPath)) {
    throw new Error(`Image not found: ${fullPath}`);
  }

  const buffer = readFileSync(fullPath);
  const base64 = buffer.toString("base64");

  const ext = fullPath.split(".").pop()?.toLowerCase();
  const mimeTypes: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    webp: "image/webp",
  };

  const mimeType = mimeTypes[ext || ""] || "application/octet-stream";
  return `data:${mimeType};base64,${base64}`;
}

/**
 * Placeholder image paths (relative to assets directory)
 */
export const placeholders = {
  avatar: "placeholders/avatar.svg",
  photo: "placeholders/photo.svg",
  logo: "placeholders/logo.svg",
} as const;

/**
 * Get a placeholder image as a data URL
 */
export async function getPlaceholder(name: keyof typeof placeholders): Promise<string> {
  return loadImageAsDataUrl(placeholders[name]);
}

/**
 * Get a placeholder image as a data URL (synchronous)
 */
export function getPlaceholderSync(name: keyof typeof placeholders): string {
  return loadImageAsDataUrlSync(placeholders[name]);
}

/**
 * Load an image from a URL and convert it to a base64 data URL
 */
export async function loadImageFromUrl(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${url}`);
  }

  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  const contentType = response.headers.get("content-type") || "image/png";
  return `data:${contentType};base64,${base64}`;
}
