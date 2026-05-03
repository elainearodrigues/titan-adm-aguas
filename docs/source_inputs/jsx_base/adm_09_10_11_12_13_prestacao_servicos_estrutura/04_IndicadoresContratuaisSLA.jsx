import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function IndicadoresContratuaisSLA() {
  const indicadores = [
    { codigo: 'IN001', nome: 'Disponibilidade da plataforma', meta: '≥ 99.5%', sabesp: '99.94%', saae: '99.81%', aguas: '99.88%', brk: '99.92%', caern: '99.62%', sev: 'ok' },
    { codigo: 'IN002', nome: 'Tempo de resposta médio', meta: '≤ 2.0s', sabesp: '0.42s', saae: '0.51s', aguas: '0.38s', brk: '0.44s', caern: '0.62s', sev: 'ok' },
    { codigo: 'IN015', nome: 'Conformidade Portaria 888', meta: '≥ 99.5%', sabesp: '99.87%', saae: '99.42%', aguas: '99.91%', brk: '99.78%', caern: '98.84%', sev: 'parcial' },
    { codigo: 'IN016', nome: 'Cobertura amostragem', meta: '100%', sabesp: '100%', saae: '98.7%', aguas: '100%', brk: '100%', caern: '94.2%', sev: 'parcial' },
    { codigo: 'IN042', nome: 'Entrega de relatórios obrigatórios', meta: '100%', sabesp: '100%', saae: '100%', aguas: '100%', brk: '100%', caern: '83.3%', sev: 'breach' },
    { codigo: 'IN048', nome: 'Rastreabilidade integral alterações', meta: '100%', sabesp: '100%', saae: '100%', aguas: '100%', brk: '100%', caern: '100%', sev: 'ok' },
    { codigo: 'IN051', nome: 'Auditoria segurança IT/OT', meta: '100%', sabesp: '100%', saae: '100%', aguas: '100%', brk: '100%', caern: '0%', sev: 'breach' },
  ];

  const breaches = [
    { ts: '02 mai 2026', operadora: 'CAERN', indicador: 'IN051 · Auditoria IT/OT', valor: '0%', meta: '100%', acao: 'Plano de ação para 30 jun 2026', status: 'em_acao' },
    { ts: '15 abr 2026', operadora: 'CAERN', indicador: 'IN042 · Entrega de relatórios', valor: '83.3%', meta: '100%', acao: 'Submissão atrasada março/2026', status: 'em_acao' },
    { ts: '28 mar 2026', operadora: 'CAERN', indicador: 'IN015 · Conformidade Portaria 888', valor: '98.84%', meta: '≥ 99.5%', acao: 'Investigação amostras turbidez', status: 'mitigado' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Operadoras', 'Indicadores contratuais & SLA']}
        title="Indicadores contratuais & SLA"
        lead="Acompanhamento dos indicadores TR §15.1 com histórico mensal e plano de ação para breach. Dashboard contratual cumulativo por operadora."
        actions={<>
          <BtnSecondary>Exportar relatório ARSESP</BtnSecondary>
          <BtnPrimary>Ver planos de ação</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Indicadores ativos" value="51" hint="conforme TR §15.1" />
        <Metric label="Operadoras conformes" value="4/5" hint="CAERN com 3 breaches" />
        <Metric label="Breaches ativos" value="3" hint="todos em CAERN" />
        <Metric label="Próximo reporte ARSESP" value="30 jun 2026" hint="ciclo trimestral" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Identificação & contratos" />
        <SubTab label="Capacidade econ.-financeira" />
        <SubTab label="DPO & Privacidade" />
        <SubTab label="Indicadores contratuais & SLA" active attention count={3} />
      </div>

      <CalloutBlock tone="warn" title="3 breaches contratuais ativos · CAERN">
        Operadora CAERN está com 2 indicadores em breach ativo (IN042 entrega de relatórios em 83.3% · IN051 auditoria IT/OT em 0%) e 1 em mitigação (IN015 conformidade 888 em 98.84%). Plano de ação obrigatório com prazo até 30 jun 2026.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="51 indicadores · 5 operadoras · TR §15.1">Indicadores TR §15.1</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Código</th>
                <th style={thStyle()}>Indicador</th>
                <th style={thStyle()}>Meta</th>
                <th style={thStyle({ textAlign: 'right' })}>Sabesp</th>
                <th style={thStyle({ textAlign: 'right' })}>SAAE</th>
                <th style={thStyle({ textAlign: 'right' })}>Águas Guar.</th>
                <th style={thStyle({ textAlign: 'right' })}>BRK</th>
                <th style={thStyle({ textAlign: 'right' })}>CAERN</th>
              </tr>
            </thead>
            <tbody>
              {indicadores.map((ind, i) => (
                <tr key={ind.codigo} style={{ borderBottom: i < indicadores.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{ind.codigo}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{ind.nome}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{ind.meta}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ind.sabesp}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ind.saae}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ind.aguas}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ind.brk}</td>
                  <td style={tdStyle({
                    textAlign: 'right',
                    fontFamily: t.font.mono,
                    fontSize: 12,
                    color: ind.sev === 'breach' ? t.colors.rust : ind.sev === 'parcial' ? t.colors.ember : t.colors.ink,
                    fontWeight: ind.sev === 'breach' ? 500 : 400,
                  })}>{ind.caern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="3 ativos · todos CAERN">Histórico de breaches</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Data</th>
                <th style={thStyle()}>Operadora</th>
                <th style={thStyle()}>Indicador</th>
                <th style={thStyle({ textAlign: 'right' })}>Atual</th>
                <th style={thStyle({ textAlign: 'right' })}>Meta</th>
                <th style={thStyle()}>Plano de ação</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {breaches.map((b, i) => (
                <tr key={i} style={{ borderBottom: i < breaches.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{b.ts}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{b.operadora}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{b.indicador}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.rust, fontWeight: 500 })}>{b.valor}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{b.meta}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' })}>{b.acao}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {b.status === 'mitigado' ? <Badge type="forest">mitigado</Badge> : <Badge type="ember">em ação</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Resumo de cumprimento por operadora</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
          <ResumoOperadora nome="Sabesp" cumprimento={51} total={51} sla="100%" />
          <ResumoOperadora nome="SAAE Campinas" cumprimento={50} total={51} sla="98.0%" />
          <ResumoOperadora nome="Águas Guariroba" cumprimento={51} total={51} sla="100%" />
          <ResumoOperadora nome="BRK Ambiental" cumprimento={51} total={51} sla="100%" />
          <ResumoOperadora nome="CAERN" cumprimento={48} total={51} sla="94.1%" hasBreaches last />
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, count, active, attention }) {
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
          backgroundColor: attention ? t.colors.rustMist : t.colors.bone,
          color: attention ? t.colors.rust : t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
    </div>
  );
}

function ResumoOperadora({ nome, cumprimento, total, sla, hasBreaches, last }) {
  const pct = (cumprimento / total) * 100;
  return (
    <div style={{
      padding: '14px 20px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'grid',
      gridTemplateColumns: '180px 1fr 80px 100px',
      gap: 16,
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 13, fontWeight: 500 }}>{nome}</span>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 11, color: t.colors.slate }}>{cumprimento} de {total} indicadores conformes</span>
        </div>
        <div style={{ height: 4, backgroundColor: t.colors.bone, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{
            width: `${pct}%`,
            height: '100%',
            backgroundColor: hasBreaches ? t.colors.rust : t.colors.forest,
          }} />
        </div>
      </div>
      <span style={{
        fontFamily: t.font.mono,
        fontSize: 13,
        fontWeight: 500,
        color: hasBreaches ? t.colors.rust : t.colors.forest,
        textAlign: 'right',
      }}>{sla}</span>
      {hasBreaches ? <Badge type="rust">3 breaches</Badge> : <Badge type="forest">conforme</Badge>}
    </div>
  );
}
