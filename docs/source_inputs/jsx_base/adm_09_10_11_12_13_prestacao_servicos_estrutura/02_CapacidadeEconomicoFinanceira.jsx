import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function CapacidadeEconomicoFinanceira() {
  const indicadores = [
    { codigo: 'IL', nome: 'Índice de Liquidez Geral', limiteMin: '≥ 1.0', sabesp: '1.42', saae: '1.18', aguas: '1.32', brk: '1.65', caern: '0.92', meta: 'cumprida' },
    { codigo: 'IE', nome: 'Índice de Endividamento', limiteMin: '≤ 0.7', sabesp: '0.43', saae: '0.51', aguas: '0.38', brk: '0.42', caern: '0.78', meta: 'parcial' },
    { codigo: 'ICR', nome: 'Índice de Capacidade de Repagamento', limiteMin: '≥ 1.5', sabesp: '2.84', saae: '1.92', aguas: '2.31', brk: '3.12', caern: '1.34', meta: 'parcial' },
    { codigo: 'CCB', nome: 'Cap. Capacidade de Investimento', limiteMin: '≥ R$ 50M/ano', sabesp: 'R$ 1.2B', saae: 'R$ 87M', aguas: 'R$ 142M', brk: 'R$ 320M', caern: 'R$ 41M', meta: 'parcial' },
  ];

  const investimentos = [
    { ano: 2024, planejado: 'R$ 980M', realizado: 'R$ 1.04B', pct: '106%' },
    { ano: 2025, planejado: 'R$ 1.15B', realizado: 'R$ 1.18B', pct: '102%' },
    { ano: 2026, planejado: 'R$ 1.40B', realizado: 'R$ 320M', pct: '23% (parcial Q1)' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Operadoras', 'Capacidade econômico-financeira']}
        title="Capacidade econômico-financeira"
        lead="Avaliação conforme Decreto 11.598/2023. Indicadores de liquidez, endividamento, capacidade de repagamento e capacidade de investimento por operadora."
        actions={<>
          <BtnSecondary>Exportar relatório ANA</BtnSecondary>
          <BtnPrimary>Atualizar demonstrativos</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Operadoras avaliadas" value="5" hint="todas no escopo" />
        <Metric label="Cumprem todos limites" value="3/5" hint="Sabesp · BRK · Águas Guariroba" />
        <Metric label="Investimento 2026" value="R$ 1.4B" delta="planejado · CAPEX consolidado" deltaPositive />
        <Metric label="Última atualização" value="12 mar 2026" hint="próxima 30 jun 2026" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Identificação & contratos" />
        <SubTab label="Capacidade econ.-financeira" active />
        <SubTab label="DPO & Privacidade" />
        <SubTab label="Indicadores contratuais & SLA" attention count={3} />
      </div>

      <CalloutBlock tone="info" title="Decreto 11.598/2023 · capacidade econômico-financeira">
        Estabelece os parâmetros mínimos para que prestadores de serviços de saneamento básico comprovem capacidade econômico-financeira para operação dos serviços. Avaliação obrigatória anual com base em demonstrações financeiras auditadas.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="indicadores Decreto 11.598/2023">Indicadores por operadora · 2025</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Indicador</th>
                <th style={thStyle()}>Limite</th>
                <th style={thStyle({ textAlign: 'right' })}>Sabesp</th>
                <th style={thStyle({ textAlign: 'right' })}>SAAE Camp.</th>
                <th style={thStyle({ textAlign: 'right' })}>Águas Guar.</th>
                <th style={thStyle({ textAlign: 'right' })}>BRK</th>
                <th style={thStyle({ textAlign: 'right' })}>CAERN</th>
              </tr>
            </thead>
            <tbody>
              {indicadores.map((ind, i) => (
                <tr key={ind.codigo} style={{ borderBottom: i < indicadores.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>
                    <div>{ind.nome}</div>
                    <div style={{ fontSize: 10, fontFamily: t.font.mono, color: t.colors.slate }}>{ind.codigo}</div>
                  </td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{ind.limiteMin}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, fontWeight: 500 })}>{ind.sabesp}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ind.saae}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ind.aguas}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ind.brk}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.rust })}>{ind.caern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        <div>
          <SectionLabel>Capacidade global · Sabesp</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <CapacityRow label="Receita líquida 2025" value="R$ 24.8 bilhões" />
            <CapacityRow label="EBITDA 2025" value="R$ 9.2 bilhões" />
            <CapacityRow label="Margem EBITDA" value="37.1%" />
            <CapacityRow label="Dívida líquida" value="R$ 18.4 bilhões" />
            <CapacityRow label="Dívida líquida / EBITDA" value="2.0x" />
            <CapacityRow label="Rating Fitch" value="AAA(bra)" status="positive" last />
          </div>
        </div>

        <div>
          <SectionLabel hint="3 anos · plurianual">Cumprimento de investimento · Sabesp</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                  <th style={thStyle()}>Ano</th>
                  <th style={thStyle({ textAlign: 'right' })}>Planejado</th>
                  <th style={thStyle({ textAlign: 'right' })}>Realizado</th>
                  <th style={thStyle({ textAlign: 'right' })}>%</th>
                </tr>
              </thead>
              <tbody>
                {investimentos.map((inv, i) => (
                  <tr key={inv.ano} style={{ borderBottom: i < investimentos.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                    <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{inv.ano}</td>
                    <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{inv.planejado}</td>
                    <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, fontWeight: 500 })}>{inv.realizado}</td>
                    <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.forest })}>{inv.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Demonstrativos auditados</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.55, margin: 0, marginBottom: 16 }}>
            Demonstrativos financeiros auditados anuais conforme padrão IFRS e exigências do Decreto 11.598/2023. Submissão obrigatória até 30 de junho de cada ano.
          </p>
          <DemonstrativoRow operadora="Sabesp" doc="DFP 2025 · KPMG · IFRS" data="15 fev 2026" status="aprovado" />
          <DemonstrativoRow operadora="SAAE Campinas" doc="Balanço auditado 2025" data="20 mar 2026" status="aprovado" />
          <DemonstrativoRow operadora="Águas Guariroba" doc="DFP 2025 · PwC · IFRS" data="28 fev 2026" status="aprovado" />
          <DemonstrativoRow operadora="BRK Ambiental" doc="DFP 2025 · EY · IFRS" data="10 mar 2026" status="aprovado" />
          <DemonstrativoRow operadora="CAERN" doc="Balanço auditado 2025" data="pendente" status="pendente" last />
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

function CapacityRow({ label, value, status, last }) {
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 12, color: t.colors.stone }}>{label}</span>
      <span style={{
        fontSize: 13,
        fontFamily: t.font.mono,
        fontWeight: 500,
        color: status === 'positive' ? t.colors.forest : t.colors.ink,
      }}>{value}</span>
    </div>
  );
}

function DemonstrativoRow({ operadora, doc, data, status, last }) {
  return (
    <div style={{
      padding: '12px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'grid',
      gridTemplateColumns: '180px 1fr 120px 100px',
      gap: 16,
      alignItems: 'center',
    }}>
      <span style={{ fontSize: 12, fontWeight: 500 }}>{operadora}</span>
      <span style={{ fontSize: 11, color: t.colors.stone, fontFamily: t.font.mono }}>{doc}</span>
      <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>{data}</span>
      {status === 'aprovado' ? <Badge type="forest">aprovado</Badge> : <Badge type="ember">pendente</Badge>}
    </div>
  );
}
