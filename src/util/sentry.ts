import env from '../env'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
Sentry.init({
  dsn: env.sentryDSN,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})
