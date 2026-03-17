import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    Sentry.init({
      dsn: 'https://be4a157f01f95ccd693d28e26ee799d7@o4510244378312704.ingest.us.sentry.io/4510244380344320',
      skipOpenTelemetrySetup: true,
      debug: false,
    });
  }
}

export const onRequestError = Sentry.captureRequestError;