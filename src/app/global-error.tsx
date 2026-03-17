'use client';

import { useEffect } from 'react';
import { NextErrorPage } from '@/errors/components/NextErrorPage';
import { reportToSentry } from '@/errors/reporting/sentry';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    reportToSentry(error);
  }, [error]);

  return (
    <html>
      <body>
        <NextErrorPage error={error} reset={reset} />
      </body>
    </html>
  );
}
