import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function VinculosInstitucionais() {
  const vinculosCLP = [
    { municipio: 'São Paulo', codIbge: '3550308', percentualAtendimento: '32%', populacaoAtendida: '3.664.398', urae: 'URAE-1', volumeMensal: '78.5 hm³' },
    { municipio: 'Cotia', codIbge: '3512803', percentualAtendimento: '88%', populacaoAtendida: '224.250', urae: 'URAE-1', volumeMensal: '4.8 hm³' },
    { municipio: 'Embu das Artes', codIbge: '3514809', percentualAtendimento: '76%', populacaoAtendida: '180.640', urae: 'URAE-1', volumeMensal: '3.9 hm³' },
    { municipio: 'Itapevi', codIbge: '3522505', percentualAtendimento: '54%', populacaoAtendida: '125.730', urae: 'URAE-1', volumeMensal: '2.7 hm³' },
    { municipio: 'Vargem Grande Paulista', codIbge: '3556503', percentualAtendimento: '92%', populacaoAtendida: '52.420', urae: 'URAE-1', volumeMensal: '1.1 hm³' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Plantas', 'Vínculos institucionais']}
        title="Vínculos institucionais"
        lead="Relação contratual e geográfica de cada planta. Operadora prestadora, sistema produtor que abastece e municípios atendidos com percentual de cobertura."
        actions={<>
          <BtnSecondary>Filtrar por planta</BtnSecondary>
          <BtnPrimary>Editar vínculos</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Plantas Águas e seus vínculos institucionais</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de plantas" />
        <SubTab label="Trens de tratamento" />
        <SubTab label="Vínculos institucionais" active />
        <SubTab label="Outorga & captação" />
        <SubTab label="Conformidade snapshot" attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Detalhe institucional · ETA Campo Limpo</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <CardColumn title="Operadora prestadora">
              <CardRow label="Razão social" value="Sabesp" />
              <CardRow label="CNPJ" value="43.776.517/0001-80" mono />
              <CardRow label="Tipo contratual" value="Concessão regionalizada URAE-1" />
              <CardRow label="Vigência" value="03 jul 2024 → 03 jul 2054" mono />
              <CardRow label="Eng. responsável CREA" value="Marina Costa · 5063147821" mono />
            </CardColumn>

            <CardColumn title="Sistema produtor">
              <CardRow label="Sistema atual" value="Cantareira (Sistema Integrado)" />
              <CardRow label="Mananciais" value="Jaguari-Jacareí · Cachoeira · Atibainha · Paiva Castro · Águas Claras" />
              <CardRow label="EEAB principal" value="EEAB Santo Amaro" />
              <CardRow label="Adutora bruta" value="Cantareira → Guaraú · DN 2400" mono />
              <CardRow label="Adição prevista" value="Paiva Castro Jan/2027" />
            </CardColumn>

            <CardColumn title="Localização & jurisdição" last>
              <CardRow label="Município sede" value="São Paulo · 3550308" mono />
              <CardRow label="URAE" value="URAE-1 · LC 1.413/2024" />
              <CardRow label="Comitê de bacia" value="CBH-AT (Alto Tietê)" />
              <CardRow label="Vigilância sanitária" value="Vigilância Municipal SP" />
              <CardRow label="Fiscalização" value="ARSESP · ANA" />
            </CardColumn>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="motor de titularidade · fracionamento de volumes">Municípios atendidos · ETA Campo Limpo</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Município</th>
                <th style={thStyle()}>Código IBGE</th>
                <th style={thStyle({ textAlign: 'right' })}>% atendimento</th>
                <th style={thStyle({ textAlign: 'right' })}>População atendida</th>
                <th style={thStyle()}>URAE</th>
                <th style={thStyle({ textAlign: 'right' })}>Volume mensal</th>
              </tr>
            </thead>
            <tbody>
              {vinculosCLP.map((v, i) => (
                <tr key={v.codIbge} style={{ borderBottom: i < vinculosCLP.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{v.municipio}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{v.codIbge}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, fontWeight: 500 })}>{v.percentualAtendimento}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{v.populacaoAtendida}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{v.urae}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.stone })}>{v.volumeMensal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{
            padding: '14px 16px',
            borderTop: `1px solid ${t.colors.bone}`,
            backgroundColor: t.colors.paper,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 12,
          }}>
            <div style={{ fontSize: 12, fontWeight: 500 }}>Total</div>
            <div></div>
            <div style={{ fontFamily: t.font.mono, fontSize: 12, textAlign: 'right' }}>4.247.438 pessoas</div>
            <div style={{ fontFamily: t.font.mono, fontSize: 12, textAlign: 'right', fontWeight: 500 }}>91.0 hm³/mês</div>
          </div>
        </div>
      </div>

      <CalloutBlock tone="info" title="Motor de titularidade · Fase 2">
        Fracionamento detalhado de volumes e custos entre municípios atendidos é responsabilidade do Motor de titularidade (item #20). Atualmente Fase 2; Onda 1 mantém apenas o cadastro de % atendimento por município.
      </CalloutBlock>
    </div>
  );
}

function SubTab({ label, active, attention, count }) {
  return (
    <div style={{
      padding: '12px 18px',
      fontSize: 13,
      fontWeight: active ? 500 : 400,
      color: active ? t.colors.ink : t.colors.stone,
      borderBottom: active ? `2px solid ${t.colors.navy}` : '2px solid transparent',
      cursor: 'pointer',
      marginBottom: -1,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
    }}>
      {label}
      {count !== undefined && count > 0 && (
        <span style={{
          padding: '1px 6px',
          fontSize: 10,
          backgroundColor: attention ? t.colors.emberMist : t.colors.bone,
          color: attention ? t.colors.ember : t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
    </div>
  );
}

function CardColumn({ title, children, last }) {
  return (
    <div style={{
      borderRight: last ? 'none' : `1px solid ${t.colors.bone}`,
      paddingRight: last ? 0 : 24,
    }}>
      <div style={{
        fontSize: 11,
        fontFamily: t.font.mono,
        color: t.colors.slate,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        marginBottom: 12,
      }}>{title}</div>
      {children}
    </div>
  );
}

function CardRow({ label, value, mono }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 2 }}>{label}</div>
      <div style={{
        fontSize: 12,
        color: t.colors.ink,
        lineHeight: 1.4,
        fontFamily: mono ? t.font.mono : t.font.sans,
      }}>{value}</div>
    </div>
  );
}
