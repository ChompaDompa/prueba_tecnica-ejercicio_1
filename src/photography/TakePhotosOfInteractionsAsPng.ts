import type { InteractionFinished } from '@serenity-js/core/events';
import { TakePhotosOfInteractions } from '@serenity-js/web';

/**
 * Same as TakePhotosOfInteractions, but the photo name ends with ".png".
 *
 * Photo names look like "win32-chromium-156.0.8078.4-Standard User clicks on finish button".
 * Playwright's HTML report uses the text after the last dot of an attachment name as the file extension,
 * so the browser version made it save screenshots as "<sha1>.4-Standard-User-clicks-on-finish-button",
 * producing paths of up to ~190 characters that break `git clone` on Windows (260-character limit).
 * With the ".png" suffix the files are saved as "<sha1>.png" instead.
 */
export class TakePhotosOfInteractionsAsPng extends TakePhotosOfInteractions {
    protected override photoNameFor(event: InteractionFinished): string {
        return `${ super.photoNameFor(event) }.png`;
    }
}
