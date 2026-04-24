interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  tag?: string
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  light = false,
  tag,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {tag && (
        <span className={`inline-block text-xs font-semibold tracking-widest uppercase mb-3 px-3 py-1 rounded-full ${
          light
            ? 'bg-white/20 text-white'
            : 'bg-purple-50 text-brand-purple'
        }`}>
          {tag}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl font-bold leading-tight mb-3 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        <span className={light ? '' : 'gradient-text'}>{title}</span>
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
