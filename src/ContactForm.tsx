import { useState } from 'react'
import { Card, TextField, Button } from '@mythos/ui-library'

export interface ContactDetails {
  fullName: string
  email: string
  message: string
}

const empty: ContactDetails = { fullName: '', email: '', message: '' }

/** Customer enquiry form on the marketing site. Submits to /v1/enquiries. */
export const ContactForm = () => {
  const [details, setDetails] = useState<ContactDetails>(empty)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const submit = async () => {
    setSending(true)
    setError(undefined)
    try {
      const response = await fetch('/v1/enquiries', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(details),
      })
      if (!response.ok) throw new Error(`enquiry rejected: ${response.status}`)
      setDetails(empty)
    } catch {
      setError('Could not send that just now. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <Card title="Get in touch">
      <TextField
        id="full-name"
        label="Full name"
        value={details.fullName}
        onChange={(fullName) => setDetails({ ...details, fullName })}
      />
      <TextField
        id="email"
        label="Email"
        value={details.email}
        onChange={(email) => setDetails({ ...details, email })}
      />
      <TextField
        id="message"
        label="Message"
        value={details.message}
        onChange={(message) => setDetails({ ...details, message })}
        helperText={error}
        invalid={Boolean(error)}
      />
      {/* TODO: customers need to tell us when they are available for a callback */}
      <Button label={sending ? 'Sending…' : 'Send'} onClick={submit} variant="primary" />
    </Card>
  )
}
