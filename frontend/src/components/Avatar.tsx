export type AvatarTone = 'blue' | 'sun' | 'ink' | 'grey'

interface AvatarProps {
  letter: string
  tone: AvatarTone
  size: number
  fontSize: number
  /** Ring colour + width, used when avatars sit in an overlapping stack. */
  ring?: { color: string; width: number }
}

export function Avatar({ letter, tone, size, fontSize, ring }: AvatarProps) {
  return (
    <div
      className={`avatar avatar--${tone}`}
      style={{
        width: size,
        height: size,
        fontSize,
        border: ring ? `${ring.width}px solid ${ring.color}` : undefined,
      }}
    >
      {letter}
    </div>
  )
}

interface StackItem { letter: string; tone: AvatarTone }

interface AvatarStackProps {
  items: StackItem[]
  size: number
  fontSize: number
  overlap: number
  ring: { color: string; width: number }
}

export function AvatarStack({ items, size, fontSize, overlap, ring }: AvatarStackProps) {
  return (
    <div className="avatar-stack" style={{ ['--overlap' as string]: `-${overlap}px` }}>
      {items.map((a, i) => (
        <Avatar key={i} {...a} size={size} fontSize={fontSize} ring={ring} />
      ))}
    </div>
  )
}
