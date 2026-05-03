import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function ObservabilidadeSLA() {
  const sla = [
    { metrica: 'Disponibilidade mensal da plataforma', meta: '≥ 99.5%', atual: '99.94%', status: 'ok', trend: '↗ 0.04%' },
    { metrica: 'Tempo de resposta médio das consultas', meta: '≤ 2.0s', atual: '0.42s', status: 'ok', trend: '↘ 0.08s' },
    { metrica: 'Cumprimento dos níveis de serviço SLA', meta: '100%', atual: '100%', status: 'ok', trend: '→' },
    { metrica: 'Entrega de relatórios obrigatórios', meta: '100%', atual: '100%', status: 'ok', trend: '→' },
    { metrica: 'Conformidade água tratada Portaria 888', meta: '≥ 99.5%', atual: '99.87%', status: 'ok', trend: '↗ 0.12%' },
    { metrica: 'Rastreabilidade integral de alterações', meta: '100%', atual: '100%', status: 'ok', trend: '→' },
    { metrica: 'Auditoria de segurança IT/OT', meta: '100%', atual: '100%', status: 'ok', trend: '→' },
  ];

  const nucleos = [
    { name: 'Núcleo Águas · ETA Campo Limpo', endpoint: 'aguas.titan.local:8080/health', status: 'ok', latency: '12ms', uptime: '99.98%' },
    { name: 'Núcleo Águas · ETA Guaraú', endpoint: 'aguas.titan.local:8081/health', status: 'ok', latency: '8ms', uptime: '99.96%' },
    { name: 'Núcleo Efluentes · ETE Barueri', endpoint: 'efluentes.titan.local:8080/health', status: 'ok', latency: '15ms', uptime: '99.99%' },
    { name: 'Admin Águas', endpoint: 'admin-aguas.titan.com.br/health', status: 'ok', latency: '24ms', uptime: '99.94%' },
    { name: 'Admin Efluentes', endpoint: 'admin-efluentes.titan.com.br/health', status: 'ok', latency: '22ms', uptime: '99.95%' },
    { name: 'Workflow CEO Dashboard', endpoint: 'cross.titan.com.br/health', status: 'degradado', latency: '342ms', uptime: '98.21%' },
  ];

  const alertas = [
    { ts: '02 mai 13:42', tipo: 'Latência elevada', alvo: 'Workflow CEO Dashboard', severidade: 'alerta', status: 'ativo' },
    { ts: '01 mai 22:15', tipo: 'Espaço em disco > 80%', alvo: 'TimescaleDB Águas', severidade: 'informativo', status: 'mitigado' },
    { ts: '28 abr 03:42', tipo: 'Tentativas de força bruta', alvo: 'Login plataforma', severidade: 'alerta', status: 'mitigado' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Observabilidade & SLA']}
        title="Observabilidade & SLA"
        lead="Cadastro de SLA por operadora e planta, alertas técnicos versus alertas de negócio, health-check dos núcleos, integração com plataformas externas de APM."
        actions={<>
          <BtnSecondary>Abrir Datadog</BtnSecondary>
          <BtnPrimary>Configurar alerta</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Disponibilidade 30d" value="99.94%" delta="meta ≥ 99.5%" deltaPositive />
        <Metric label="Tempo de resposta p50" value="420ms" delta="meta ≤ 2.0s" deltaPositive />
        <Metric label="Alertas ativos" value="1" hint="severidade alerta" />
        <Metric label="Núcleos saudáveis" value="5/6" hint="1 degradado" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="TR §15.1 indicadores contratuais">Indicadores contratuais de SLA</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Indicador</th>
                <th style={thStyle({ textAlign: 'right' })}>Meta</th>
                <th style={thStyle({ textAlign: 'right' })}>Atual (30d)</th>
                <th style={thStyle({ textAlign: 'center' })}>Tendência</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {sla.map((s, i) => (
                <tr key={i} style={{ borderBottom: i < sla.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{s.metrica}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.slate })}>{s.meta}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 13, fontWeight: 500 })}>{s.atual}</td>
                  <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 11, color: t.colors.forest })}>{s.trend}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {s.status === 'ok' ? <Badge type="forest">conforme</Badge> : <Badge type="rust">breach</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="6 endpoints monitorados">Health-check dos núcleos</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Componente</th>
                <th style={thStyle()}>Endpoint</th>
                <th style={thStyle({ textAlign: 'right' })}>Latência</th>
                <th style={thStyle({ textAlign: 'right' })}>Uptime 30d</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {nucleos.map((n, i) => (
                <tr key={i} style={{ borderBottom: i < nucleos.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{n.name}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{n.endpoint}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{n.latency}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{n.uptime}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {n.status === 'ok' ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: t.colors.forest }} />
                        <span style={{ fontSize: 12, color: t.colors.forest, fontWeight: 500 }}>operacional</span>
                      </span>
                    ) : (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: t.colors.ember }} />
                        <span style={{ fontSize: 12, color: t.colors.ember, fontWeight: 500 }}>degradado</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <SectionLabel>Alertas recentes</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
            {alertas.map((a, i) => (
              <div key={i} style={{
                padding: 16,
                borderBottom: i < alertas.length - 1 ? `1px solid ${t.colors.bone}` : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: t.colors.ink }}>{a.tipo}</div>
                  {a.status === 'ativo'
                    ? <Badge type="ember">ativo</Badge>
                    : <Badge type="forest">mitigado</Badge>}
                </div>
                <div style={{ fontSize: 12, color: t.colors.stone, marginBottom: 4 }}>{a.alvo}</div>
                <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>{a.ts}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionLabel>Integrações APM</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <APMRow name="Datadog" status="ativo" coverage="Aplicação · infraestrutura · logs" detail="ddoge_titan@sabesp · região sa-east-1" />
            <APMRow name="Grafana Cloud" status="ativo" coverage="Métricas Prometheus dos núcleos" detail="grafana.titan.com.br" />
            <APMRow name="Sentry" status="ativo" coverage="Captura de exceções frontend e backend" detail="sentry.io/sabesp/titan" />
            <APMRow name="StatusPage" status="inativo" coverage="Página pública de status" detail="Roadmap Q3 2026" />
          </div>
        </div>
      </div>
    </div>
  );
}

function APMRow({ name, status, coverage, detail }) {
  return (
    <div style={{
      padding: '12px 0',
      borderBottom: `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: t.colors.ink }}>{name}</span>
          {status === 'ativo' ? <Badge type="forest">ativo</Badge> : <Badge type="neutral">inativo</Badge>}
        </div>
        <div style={{ fontSize: 12, color: t.colors.stone, marginBottom: 2 }}>{coverage}</div>
        <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>{detail}</div>
      </div>
    </div>
  );
}
