import { Compass, Cpu, FileText, MapPin, MessagesSquare, Network, PanelsTopLeft } from 'lucide-react'

const serviceIcons = {
  networks: Network,
  iot: Cpu,
  gps: MapPin,
  'digital-systems': PanelsTopLeft,
  communication: FileText,
  'digital-communication': MessagesSquare,
  consulting: Compass,
}

export function ServiceIcon({ id, size = 24 }: { id: string; size?: number }) {
  const Icon = serviceIcons[id as keyof typeof serviceIcons] ?? Compass
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />
}
