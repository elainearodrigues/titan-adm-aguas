import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function OutorgaCaptacao() {
  const outorgas = [
    { id: 'OUT-2024-0837/SP', orgao: 'DAEE-SP', planta: 'ETA Campo Limpo', manancial: 'Cantareira', vazaoOutorgada: '32.000 L/s', vigencia: '01 jan 2025 → 31 dez 2034', situacao: 'vigente' },
    { id: 'OUT-2026-0102/SP', orgao: 'DAEE-SP', planta: 'ETA Campo Limpo', manancial: 'Paiva Castro', vazaoOutorgada: '~2.000 L/s', vigencia: 'provisional · definitiva nov/2026', situacao: 'provisional' },
    { id: 'OUT-2024-0204/SP', orgao: 'DAEE-SP', planta: 'ETA Taiaçupeba', manancial: 'Alto Tietê', vazaoOutorgada: '14.500 L/s', vigencia: '01 jan 2025 → 31 dez 2034', situacao: 'vigente' },
    { id: 'OUT-2024-0156/SP', orgao: 'DAEE-SP', planta: 'ETA ABV', manancial: 'Guarapiranga', vazaoOutorgada: '14.800 L/s', vigencia: '01 jan 2025 → 31 dez 2034', situacao: 'vigente' },
    { id: 'OUT-2024-0089/SP', orgao: 'DAEE-SP', planta: 'ETA Rio Claro', manancial: 'Rio Claro', vazaoOutorgada: '4.000 L/s', vigencia: '01 jan 2025 → 31 dez 2034', situacao: 'vigente' },
    { id: 'OUT-2025-0312/SP', orgao: 'DAEE-SP', planta: 'ETA Capivari', manancial: 'Rio Capivari', vazaoOutorgada: '2.800 L/s', vigencia: '15 mar 2025 → 14 mar 2035', situacao: 'vigente' },
    { id: 'OUT-2014-0048/RN', orgao: 'IDEMA-RN', planta: 'ETA Jiquí', manancial: 'Aquífero Dunas-Barreiras', vazaoOutorgada: '1.200 L/s', vigencia: '15 ago 2014 → 14 ago 2024', situacao: 'vencida · renovação' },
  ];

  const medicoesCLP = [
    { mes: 'Jan 2026', volumeOutorgado: '85.7 hm³', volumeCaptado: '78.4 hm³', utilizacao: '91.5%', situacao: 'normal' },
    { mes: 'Fev 2026', volumeOutorgado: '77.4 hm³', volumeCaptado: '72.1 hm³', utilizacao: '93.1%', situacao: 'normal' },
    { mes: 'Mar 2026', volumeOutorgado: '85.7 hm³', volumeCaptado: '79.8 hm³', utilizacao: '93.1%', situacao: 'normal' },
    { mes: 'Abr 2026', volumeOutorgado: '82.9 hm³', volumeCaptado: '76.5 hm³', utilizacao: '92.3%', situacao: 'normal' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Plantas', 'Outorga & captação']}
        title="Outorga & captação"
        lead="Outorgas hídricas conforme Lei 9.433/97. Vincula cada planta às autorizações ANA/DAEE/IDEMA com volume captado vs outorgado, vigência e renovações."
        actions={<>
          <BtnSecondary>Reportar à ANA HIDRWEB</BtnSecondary>
          <BtnPrimary>Anexar outorga</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Outorgas de captação · em Efluentes ficam outorgas de lançamento</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Outorgas vigentes" value="6/7" hint="ETA Jiquí em renovação" />
        <Metric label="Vazão outorgada total" value="71.300 L/s" hint="domínio Águas SP" />
        <Metric label="Utilização média 30d" value="92.5%" hint="dentro do limite" />
        <Metric label="Renovações em 90d" value="2" hint="Águas e Efluentes" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de plantas" />
        <SubTab label="Trens de tratamento" />
        <SubTab label="Vínculos institucionais" />
        <SubTab label="Outorga & captação" active />
        <SubTab label="Conformidade snapshot" attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Lei 9.433/97 · ANA + DAEE + IDEMA">Outorgas vinculadas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Outorga</th>
                <th style={thStyle()}>Órgão</th>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle()}>Manancial</th>
                <th style={thStyle({ textAlign: 'right' })}>Vazão outorgada</th>
                <th style={thStyle()}>Vigência</th>
                <th style={thStyle({ textAlign: 'center' })}>Situação</th>
              </tr>
            </thead>
            <tbody>
              {outorgas.map((o, i) => (
                <tr key={o.id} style={{ borderBottom: i < outorgas.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy, fontWeight: 500 })}>{o.id}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{o.orgao}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{o.planta}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{o.manancial}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{o.vazaoOutorgada}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{o.vigencia}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {o.situacao === 'vigente' && <Badge type="forest">vigente</Badge>}
                    {o.situacao === 'provisional' && <Badge type="ember">provisional</Badge>}
                    {o.situacao.startsWith('vencida') && <Badge type="rust">renovação</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="histórico mensal · ETA Campo Limpo">Volumes captados vs outorgados</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Mês</th>
                <th style={thStyle({ textAlign: 'right' })}>Volume outorgado</th>
                <th style={thStyle({ textAlign: 'right' })}>Volume captado</th>
                <th style={thStyle({ textAlign: 'right' })}>Utilização</th>
                <th style={thStyle({ textAlign: 'center' })}>Situação</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {medicoesCLP.map((m, i) => (
                <tr key={m.mes} style={{ borderBottom: i < medicoesCLP.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{m.mes}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.slate })}>{m.volumeOutorgado}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, fontWeight: 500 })}>{m.volumeCaptado}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.forest })}>{m.utilizacao}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <Badge type="forest">{m.situacao}</Badge>
                  </td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>HIDRWEB ↗</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CalloutBlock tone="info" title="Reporte automático à ANA HIDRWEB">
        Volumes captados são reportados mensalmente à plataforma ANA HIDRWEB via integração configurada em #01 → Integrações externas. Submissões assinadas com ICP-Brasil A1 e arquivadas como cadeia de evidência por 7 anos.
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
