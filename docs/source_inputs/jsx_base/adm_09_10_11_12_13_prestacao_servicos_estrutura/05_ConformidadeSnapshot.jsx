import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function ConformidadeSnapshot() {
  const conformidade = [
    { planta: 'ETA Campo Limpo', portaria888: 99.87, cobertura: 100, p95turb: 0.18, cloroMin: 0.34, status: 'conforme', pendencias: 2 },
    { planta: 'ETA Guaraú', portaria888: 99.92, cobertura: 100, p95turb: 0.16, cloroMin: 0.38, status: 'conforme', pendencias: 0 },
    { planta: 'ETA Taiaçupeba', portaria888: 99.74, cobertura: 100, p95turb: 0.21, cloroMin: 0.31, status: 'conforme', pendencias: 0 },
    { planta: 'ETA ABV', portaria888: 99.81, cobertura: 100, p95turb: 0.19, cloroMin: 0.36, status: 'conforme', pendencias: 0 },
    { planta: 'ETA Rio Claro', portaria888: 99.68, cobertura: 100, p95turb: 0.22, cloroMin: 0.32, status: 'conforme', pendencias: 0 },
    { planta: 'ETA Rio Grande', portaria888: 99.78, cobertura: 100, p95turb: 0.20, cloroMin: 0.35, status: 'conforme', pendencias: 0 },
    { planta: 'ETA Morro Grande', portaria888: 99.82, cobertura: 100, p95turb: 0.18, cloroMin: 0.36, status: 'conforme', pendencias: 0 },
    { planta: 'ETA Capivari', portaria888: 99.42, cobertura: 98.7, p95turb: 0.25, cloroMin: 0.28, status: 'parcial', pendencias: 1 },
    { planta: 'ETA Atibaia', portaria888: 99.51, cobertura: 100, p95turb: 0.23, cloroMin: 0.30, status: 'conforme', pendencias: 0 },
    { planta: 'ETA Jiquí', portaria888: 98.84, cobertura: 94.2, p95turb: 0.29, cloroMin: 0.24, status: 'breach', pendencias: 4 },
  ];

  const pendenciasCLP = [
    { regra: 'R3', sev: 'bloqueante', desc: 'BD-01 sem calibração in situ', detalhes: 'Bomba dosadora PAC 1 · setpoint % não converte para mg/L · ensaio agendado set/2026' },
    { regra: 'R3', sev: 'bloqueante', desc: 'BD-03 sem calibração in situ', detalhes: 'Bomba dosadora cloro pré · ensaio agendado set/2026' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Plantas', 'Conformidade snapshot']}
        title="Conformidade snapshot"
        lead="Estado regulatório consolidado por planta. Indicadores Portaria 888, cobertura de amostragem, KPIs de qualidade e pendências bloqueantes."
        actions={<>
          <BtnSecondary>Exportar CSV</BtnSecondary>
          <BtnPrimary>Re-avaliar agora</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Avaliação contra Portaria GM/MS 888/2021</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <CalloutBlock tone="warn" title="ETA Campo Limpo · 2 pendências bloqueantes">
        Bombas dosadoras BD-01 e BD-03 sem calibração in situ (regra R3). Conformidade atual 99.87% mantida porque processos químicos estão dentro de envelope, mas operação automática está suspensa nos loops afetados até regularização.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Plantas conformes" value="9/10" hint="ETA Jiquí em breach" />
        <Metric label="Conformidade média" value="99.66%" delta="meta ≥ 99.5%" deltaPositive />
        <Metric label="Pendências totais" value="7" hint="2 ETA Campo Limpo · 1 Capivari · 4 Jiquí" />
        <Metric label="Última avaliação" value="48s atrás" hint="cadência 60s" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de plantas" />
        <SubTab label="Trens de tratamento" />
        <SubTab label="Vínculos institucionais" />
        <SubTab label="Outorga & captação" />
        <SubTab label="Conformidade snapshot" active attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="ranking por conformidade · 10 mostradas">Estado por planta</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle({ textAlign: 'right' })}>Conformidade 888</th>
                <th style={thStyle({ textAlign: 'right' })}>Cobertura amost.</th>
                <th style={thStyle({ textAlign: 'right' })}>Turb p95</th>
                <th style={thStyle({ textAlign: 'right' })}>Cloro min.</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
                <th style={thStyle({ textAlign: 'right' })}>Pendências</th>
              </tr>
            </thead>
            <tbody>
              {conformidade.map((c, i) => (
                <tr key={c.planta} style={{ borderBottom: i < conformidade.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{c.planta}</td>
                  <td style={tdStyle({
                    textAlign: 'right',
                    fontFamily: t.font.mono,
                    fontSize: 12,
                    fontWeight: 500,
                    color: c.portaria888 >= 99.5 ? t.colors.forest : c.portaria888 >= 99.0 ? t.colors.ember : t.colors.rust,
                  })}>{c.portaria888}%</td>
                  <td style={tdStyle({
                    textAlign: 'right',
                    fontFamily: t.font.mono,
                    fontSize: 12,
                    color: c.cobertura >= 99 ? t.colors.forest : c.cobertura >= 95 ? t.colors.ember : t.colors.rust,
                  })}>{c.cobertura}%</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{c.p95turb} NTU</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{c.cloroMin} mg/L</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {c.status === 'conforme' && <Badge type="forest">conforme</Badge>}
                    {c.status === 'parcial' && <Badge type="ember">parcial</Badge>}
                    {c.status === 'breach' && <Badge type="rust">breach</Badge>}
                  </td>
                  <td style={tdStyle({
                    textAlign: 'right',
                    fontFamily: t.font.mono,
                    fontSize: 12,
                    fontWeight: c.pendencias > 0 ? 500 : 400,
                    color: c.pendencias === 0 ? t.colors.slate : c.pendencias > 2 ? t.colors.rust : t.colors.ember,
                  })}>{c.pendencias}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Pendências detalhadas · ETA Campo Limpo</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          {pendenciasCLP.map((p, i) => (
            <div key={i} style={{
              padding: '14px 20px',
              borderBottom: i < pendenciasCLP.length - 1 ? `1px solid ${t.colors.bone}` : 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 12,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: 4,
                backgroundColor: t.colors.rust,
                marginTop: 6,
                flexShrink: 0,
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: t.font.mono, fontSize: 11, fontWeight: 500, color: t.colors.rust }}>{p.regra}</span>
                  <Badge type="rust">{p.sev}</Badge>
                  <span style={{ fontSize: 12, fontWeight: 500 }}>{p.desc}</span>
                </div>
                <div style={{ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' }}>{p.detalhes}</div>
              </div>
              <BtnGhost>Resolver →</BtnGhost>
            </div>
          ))}
        </div>
      </div>
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
