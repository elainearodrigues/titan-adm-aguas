export const tokens = {
  colors: {
    ink: '#0A0E13',
    stone: '#3D4148',
    slate: '#6B7280',
    mist: '#9CA3AF',
    bone: '#E5E5DF',
    paper: '#FAFAF7',
    pure: '#FFFFFF',
    navy: '#0F4C75',
    navyDeep: '#0A3454',
    navyMist: '#E8EFF5',
    forest: '#1B4332',
    forestMist: '#E6EEE9',
    ember: '#996515',
    emberMist: '#F5EEDF',
    rust: '#8B2A2A',
    rustMist: '#F4E4E4',
  },
  font: {
    sans: '"IBM Plex Sans", system-ui, sans-serif',
    mono: '"IBM Plex Mono", monospace',
    serif: '"IBM Plex Serif", Georgia, serif',
  },
};

export const t = tokens;

export function Eyebrow({ children, color }) {
  return (
    <div style={{
      fontFamily: tokens.font.mono,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: color || tokens.colors.slate,
      marginBottom: 8,
    }}>{children}</div>
  );
}

export function Breadcrumb({ items }) {
  return (
    <div style={{
      fontFamily: tokens.font.mono,
      fontSize: 11,
      letterSpacing: '0.06em',
      color: tokens.colors.slate,
      marginBottom: 12,
      textTransform: 'uppercase',
    }}>
      {items.join('  /  ')}
    </div>
  );
}

export function PageHeader({ breadcrumb, title, lead, actions }) {
  return (
    <div style={{ marginBottom: 32, paddingBottom: 20, borderBottom: `1px solid ${tokens.colors.bone}` }}>
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: 32,
            fontWeight: 400,
            margin: 0,
            marginBottom: 6,
            letterSpacing: '-0.02em',
            color: tokens.colors.ink,
            lineHeight: 1.15,
          }}>{title}</h1>
          {lead && <p style={{
            fontSize: 14,
            color: tokens.colors.stone,
            margin: 0,
            maxWidth: 680,
            lineHeight: 1.55,
          }}>{lead}</p>}
        </div>
        {actions && <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>{actions}</div>}
      </div>
    </div>
  );
}

export function SectionLabel({ children, hint }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12,
      paddingBottom: 8,
      borderBottom: `1px solid ${tokens.colors.bone}`,
    }}>
      <h2 style={{
        fontSize: 13,
        fontWeight: 500,
        color: tokens.colors.ink,
        margin: 0,
        letterSpacing: '0.02em',
      }}>{children}</h2>
      {hint && <span style={{ fontSize: 11, color: tokens.colors.slate, fontFamily: tokens.font.mono }}>{hint}</span>}
    </div>
  );
}

export function BtnPrimary({ children, onClick, size = 'md' }) {
  const sizes = { sm: '6px 12px', md: '9px 16px', lg: '12px 20px' };
  const fonts = { sm: 12, md: 13, lg: 14 };
  return (
    <button onClick={onClick} style={{
      backgroundColor: tokens.colors.navy,
      color: tokens.colors.pure,
      border: 'none',
      borderRadius: 2,
      cursor: 'pointer',
      fontFamily: tokens.font.sans,
      fontWeight: 500,
      letterSpacing: '0.01em',
      padding: sizes[size],
      fontSize: fonts[size],
      whiteSpace: 'nowrap',
    }}>{children}</button>
  );
}

export function BtnSecondary({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      backgroundColor: tokens.colors.pure,
      color: tokens.colors.ink,
      border: `1px solid ${tokens.colors.stone}`,
      borderRadius: 2,
      padding: '8px 16px',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: tokens.font.sans,
      whiteSpace: 'nowrap',
    }}>{children}</button>
  );
}

export function BtnGhost({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      backgroundColor: 'transparent',
      color: tokens.colors.navy,
      border: 'none',
      padding: '6px 0',
      fontSize: 12,
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: tokens.font.sans,
    }}>{children}</button>
  );
}

export function Badge({ type, children }) {
  const styles = {
    forest: { bg: tokens.colors.forestMist, fg: tokens.colors.forest, br: tokens.colors.forest },
    ember: { bg: tokens.colors.emberMist, fg: tokens.colors.ember, br: tokens.colors.ember },
    rust: { bg: tokens.colors.rustMist, fg: tokens.colors.rust, br: tokens.colors.rust },
    navy: { bg: tokens.colors.navyMist, fg: tokens.colors.navy, br: tokens.colors.navy },
    neutral: { bg: tokens.colors.bone, fg: tokens.colors.stone, br: tokens.colors.stone },
  };
  const s = styles[type] || styles.neutral;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '2px 8px',
      fontSize: 10,
      fontWeight: 500,
      color: s.fg,
      backgroundColor: s.bg,
      border: `1px solid ${s.br}`,
      borderRadius: 2,
      letterSpacing: '0.02em',
      fontFamily: tokens.font.sans,
    }}>{children}</span>
  );
}

export function Pill({ type, children, filled }) {
  const colors = {
    forest: tokens.colors.forest,
    ember: tokens.colors.ember,
    rust: tokens.colors.rust,
    navy: tokens.colors.navy,
  };
  const c = colors[type] || tokens.colors.stone;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 11px',
      fontSize: 11,
      fontWeight: 500,
      color: filled ? tokens.colors.pure : c,
      backgroundColor: filled ? c : 'transparent',
      border: `1px solid ${c}`,
      borderRadius: 14,
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

export function DotBadge({ color, label, size = 8 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: tokens.colors.stone }}>
      <span style={{ width: size, height: size, borderRadius: size/2, backgroundColor: color, flexShrink: 0 }} />
      {label}
    </span>
  );
}

export function Metric({ label, value, delta, deltaPositive, hint }) {
  return (
    <div style={{
      backgroundColor: tokens.colors.pure,
      border: `1px solid ${tokens.colors.bone}`,
      padding: 16,
    }}>
      <div style={{
        fontSize: 11,
        color: tokens.colors.slate,
        fontWeight: 500,
        letterSpacing: '0.04em',
        marginBottom: 8,
        textTransform: 'uppercase',
      }}>{label}</div>
      <div style={{
        fontFamily: tokens.font.sans,
        fontSize: 24,
        fontWeight: 400,
        color: tokens.colors.ink,
        letterSpacing: '-0.02em',
        marginBottom: 4,
        lineHeight: 1.1,
      }}>{value}</div>
      {(delta || hint) && (
        <div style={{
          fontSize: 11,
          fontFamily: tokens.font.mono,
          color: deltaPositive ? tokens.colors.forest : tokens.colors.slate,
        }}>{delta || hint}</div>
      )}
    </div>
  );
}

export function Field({ label, value, placeholder, helper, mono, error, required, disabled, type = 'text' }) {
  const errorColor = tokens.colors.rust;
  return (
    <div>
      <label style={{
        fontSize: 11,
        color: tokens.colors.stone,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 5,
        letterSpacing: '0.02em',
      }}>
        {label}
        {required && <span style={{ color: tokens.colors.rust, fontWeight: 400, fontSize: 10 }}>·obrigatório</span>}
      </label>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={!!error}
        style={{
          width: '100%',
          padding: '8px 10px',
          fontSize: 13,
          fontFamily: mono ? tokens.font.mono : tokens.font.sans,
          color: disabled ? tokens.colors.slate : tokens.colors.ink,
          backgroundColor: disabled ? tokens.colors.bone : tokens.colors.pure,
          border: `1px solid ${error ? errorColor : tokens.colors.bone}`,
          borderRadius: 2,
          outline: 'none',
          boxSizing: 'border-box',
          cursor: disabled ? 'not-allowed' : 'text',
        }}
      />
      {(helper || error) && (
        <div style={{
          fontSize: 10,
          color: error ? errorColor : tokens.colors.slate,
          marginTop: 4,
        }}>{error || helper}</div>
      )}
    </div>
  );
}

export function ToggleField({ label, checked, helper }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '12px 0',
      borderBottom: `1px solid ${tokens.colors.bone}`,
    }}>
      <div style={{ flex: 1, paddingRight: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 500, color: tokens.colors.ink, marginBottom: 2 }}>{label}</div>
        {helper && <div style={{ fontSize: 12, color: tokens.colors.stone, lineHeight: 1.5 }}>{helper}</div>}
      </div>
      <div style={{
        width: 36,
        height: 20,
        backgroundColor: checked ? tokens.colors.navy : tokens.colors.bone,
        borderRadius: 10,
        position: 'relative',
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'background 120ms',
      }}>
        <div style={{
          width: 16,
          height: 16,
          backgroundColor: tokens.colors.pure,
          borderRadius: 8,
          position: 'absolute',
          top: 2,
          left: checked ? 18 : 2,
          transition: 'left 120ms',
        }} />
      </div>
    </div>
  );
}

export function DataRow({ cells, last }) {
  return (
    <tr style={{ borderBottom: last ? 'none' : `1px solid ${tokens.colors.bone}` }}>
      {cells.map((c, i) => <td key={i} style={c.style || tdBase}>{c.content || c}</td>)}
    </tr>
  );
}

const tdBase = {
  padding: '12px 16px',
  color: tokens.colors.ink,
  fontSize: 13,
};

export function thStyle(extra = {}) {
  return {
    padding: '10px 16px',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: 500,
    color: tokens.colors.slate,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    ...extra,
  };
}

export function tdStyle(extra = {}) {
  return {
    padding: '12px 16px',
    color: tokens.colors.ink,
    fontSize: 13,
    ...extra,
  };
}

export function EmptyState({ title, desc, action }) {
  return (
    <div style={{
      backgroundColor: tokens.colors.pure,
      border: `1px solid ${tokens.colors.bone}`,
      padding: 56,
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8, color: tokens.colors.ink }}>{title}</div>
      <div style={{ fontSize: 12, color: tokens.colors.stone, marginBottom: 20, maxWidth: 460, margin: '0 auto 20px', lineHeight: 1.55 }}>{desc}</div>
      {action}
    </div>
  );
}

export function CalloutBlock({ tone, title, children }) {
  const tones = {
    info: { bg: tokens.colors.navyMist, br: tokens.colors.navy, fg: tokens.colors.navy },
    warn: { bg: tokens.colors.emberMist, br: tokens.colors.ember, fg: tokens.colors.ember },
    error: { bg: tokens.colors.rustMist, br: tokens.colors.rust, fg: tokens.colors.rust },
    success: { bg: tokens.colors.forestMist, br: tokens.colors.forest, fg: tokens.colors.forest },
  };
  const s = tones[tone] || tones.info;
  return (
    <div style={{
      backgroundColor: s.bg,
      border: `1px solid ${s.br}`,
      padding: 16,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
    }}>
      <div style={{ width: 3, alignSelf: 'stretch', backgroundColor: s.br }} />
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontSize: 13, fontWeight: 500, color: s.fg, marginBottom: 4 }}>{title}</div>}
        <div style={{ fontSize: 12, color: tokens.colors.stone, lineHeight: 1.6 }}>{children}</div>
      </div>
    </div>
  );
}

export function DomainPill({ domain }) {
  const map = {
    aguas: { label: 'Domínio: Águas', color: tokens.colors.navy, bg: tokens.colors.navyMist },
    efluentes: { label: 'Domínio: Efluentes', color: tokens.colors.forest, bg: tokens.colors.forestMist },
  };
  const s = map[domain] || map.aguas;
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      fontSize: 11,
      fontWeight: 500,
      color: s.color,
      backgroundColor: s.bg,
      border: `1px solid ${s.color}`,
      borderRadius: 12,
      letterSpacing: '0.02em',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: s.color }} />
      {s.label}
    </span>
  );
}

export function CrossAdminLink({ to }) {
  const target = to === 'efluentes' ? 'Admin Efluentes' : 'Admin Águas';
  return (
    <a style={{
      fontSize: 11,
      fontFamily: tokens.font.mono,
      color: tokens.colors.slate,
      textDecoration: 'none',
      cursor: 'pointer',
      letterSpacing: '0.04em',
    }}>
      Ver em {target} →
    </a>
  );
}
