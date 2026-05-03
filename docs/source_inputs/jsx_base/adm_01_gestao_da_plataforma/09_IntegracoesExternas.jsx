import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function IntegracoesExternas() {
  const integracoes = [
    {
      provider: 'INMET · Inst. Nacional de Meteorologia',
      categoria: 'meteorologia',
      endpoint: 'apitempo.inmet.gov.br/v2',
      auth: 'API key (vault)',
      sla: '99.2%',
      latencia: '180ms p95',
      ultimoCall: '02 mai 14:30',
      status: 'ativo',
      uso: 'Modelo de previsão 48h · ETA Campo Limpo'
    },
    {
      provider: 'Open-Meteo · previsão 96h',
      categoria: 'previsao_meteo',
      endpoint: 'api.open-meteo.com/v1/forecast',
      auth: 'sem auth (livre)',
      sla: '99.8%',
      latencia: '220ms p95',
      ultimoCall: '02 mai 14:32',
      status: 'ativo',
      uso: 'Antecipação de coagulação 48-96h'
    },
    {
      provider: 'ANA · HIDRWEB',
      categoria: 'recursos_hidricos',
      endpoint: 'sas.ana.gov.br/sas/sicarweb',
      auth: 'OAuth2 + cert ICP',
      sla: '97.4%',
      latencia: '1.2s p95',
      ultimoCall: '02 mai 09:15',
      status: 'ativo',
      uso: 'Outorgas e medições reportadas'
    },
    {
      provider: 'DAEE-SP',
      categoria: 'recursos_hidricos',
      endpoint: 'cadastro.daee.sp.gov.br/api',
      auth: 'API key (vault)',
      sla: '95.8%',
      latencia: '850ms p95',
      ultimoCall: '01 mai 16:42',
      status: 'ativo',
      uso: 'Outorgas estaduais SP'
    },
    {
      provider: 'ARSESP eletrônico',
      categoria: 'regulatorio',
      endpoint: 'eletronico.arsesp.sp.gov.br/api',
      auth: 'OAuth2 + cert ICP',
      sla: '98.1%',
      latencia: '480ms p95',
      ultimoCall: '02 mai 03:00',
      status: 'ativo',
      uso: 'Submissão eletrônica LCE 1.413/2024'
    },
    {
      provider: 'SISAGUA · MS',
      categoria: 'regulatorio',
      endpoint: 'sisagua.saude.gov.br/api',
      auth: 'OAuth2 + cert ICP',
      sla: '96.3%',
      latencia: '720ms p95',
      ultimoCall: '01 mai 23:00',
      status: 'ativo',
      uso: 'Submissão Portaria 888 mensal'
    },
    {
      provider: 'ICP-Brasil · A1',
      categoria: 'assinatura',
      endpoint: 'iti.gov.br/icp-brasil',
      auth: 'Certificado A1',
      sla: '99.6%',
      latencia: '90ms p95',
      ultimoCall: '02 mai 03:00',
      status: 'ativo',
      uso: 'Assinatura digital de submissões'
    },
    {
      provider: 'IBGE · API códigos',
      categoria: 'identidade',
      endpoint: 'servicodados.ibge.gov.br/api',
      auth: 'sem auth (livre)',
      sla: '99.4%',
      latencia: '120ms p95',
      ultimoCall: '02 mai 11:42',
      status: 'ativo',
      uso: 'Validação de municípios e estados'
    },
    {
      provider: 'Receita Federal · CNPJ',
      categoria: 'identidade',
      endpoint: 'receitaws.com.br/v1',
      auth: 'API key (vault)',
      sla: '94.2%',
      latencia: '1.8s p95',
      ultimoCall: '02 mai 13:15',
      status: 'degradado',
      uso: 'Validação de CNPJ na criação de operadora'
    },
    {
      provider: 'SINISA · MCidades',
      categoria: 'regulatorio',
      endpoint: 'sinisa.mcidades.gov.br/api',
      auth: 'OAuth2 + cert ICP',
      sla: 'em homologação',
      latencia: '—',
      ultimoCall: '—',
      status: 'fase 2',
      uso: 'Submissão consolidada (404 informações)'
    },
  ];

  const counts = integracoes.reduce((acc, i) => {
    acc[i.categoria] = (acc[i.categoria] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Integrações externas']}
        title="Integrações externas"
        lead="Cadastro e governança de APIs externas. Cada integração com credenciais em vault, SLA do provedor monitorado e Anti-Corruption Layer para isolar mudanças de schema externo."
        actions={<>
          <BtnSecondary>Testar conectividade</BtnSecondary>
          <BtnPrimary>Nova integração</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Integrações ativas" value="9" hint="1 em fase 2" />
        <Metric label="Disponibilidade média" value="98.0%" hint="ponderada por uso" />
        <Metric label="Calls este mês" value="142.3k" hint="+8% vs anterior" />
        <Metric label="Schemas com ACL" value="100%" delta="todas isoladas" deltaPositive />
      </div>

      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <CategoryChip label="Todas" count={integracoes.length} active />
          <CategoryChip label="Meteorologia" count={counts.meteorologia + (counts.previsao_meteo || 0)} />
          <CategoryChip label="Recursos hídricos" count={counts.recursos_hidricos} />
          <CategoryChip label="Regulatório" count={counts.regulatorio} />
          <CategoryChip label="Identidade" count={counts.identidade} />
          <CategoryChip label="Assinatura" count={counts.assinatura} />
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="10 cadastradas · 9 ativas">Catálogo de integrações</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Provedor</th>
                <th style={thStyle()}>Categoria</th>
                <th style={thStyle()}>Endpoint</th>
                <th style={thStyle()}>Auth</th>
                <th style={thStyle({ textAlign: 'right' })}>SLA 30d</th>
                <th style={thStyle({ textAlign: 'right' })}>Latência</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {integracoes.map((ig, i) => (
                <tr key={i} style={{ borderBottom: i < integracoes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{ig.provider}</td>
                  <td style={tdStyle()}><Badge type="neutral">{ig.categoria.replace('_', ' ')}</Badge></td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{ig.endpoint}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontFamily: t.font.mono })}>{ig.auth}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{ig.sla}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{ig.latencia}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {ig.status === 'ativo' && <Pill type="forest" filled>ativo</Pill>}
                    {ig.status === 'degradado' && <Pill type="ember" filled>degradado</Pill>}
                    {ig.status === 'fase 2' && <Pill type="navy">fase 2</Pill>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <SectionLabel>Anti-Corruption Layer</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
            <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.6, margin: 0, marginBottom: 16 }}>
              Cada integração externa tem ACL própria que traduz o schema do provedor para o domínio TITAN. Mudanças de schema externo não contaminam os aggregates internos.
            </p>
            <ACLRow provider="INMET" version="schema v3.2" status="alinhado" />
            <ACLRow provider="ANA HIDRWEB" version="schema v2.8" status="alinhado" />
            <ACLRow provider="ARSESP eletrônico" version="schema v1.4" status="alinhado" />
            <ACLRow provider="SISAGUA" version="schema v4.1" status="alinhado" last />
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: `1px solid ${t.colors.bone}` }}>
              <BtnGhost>Auditar mudanças de schema</BtnGhost>
            </div>
          </div>
        </div>
        <div>
          <SectionLabel>Política de retry e circuit breaker</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <ToggleField label="Retry exponencial" checked={true} helper="3 tentativas · backoff 1s · 2s · 4s" />
            <ToggleField label="Circuit breaker" checked={true} helper="Abre após 5 falhas · timeout 30s" />
            <ToggleField label="Cache local de respostas" checked={true} helper="TTL configurável por provedor" />
            <ToggleField label="Fallback gracioso" checked={true} helper="Operação degradada vs falha total" />
            <ToggleField label="Dead letter queue" checked={true} helper="Mensagens não entregues vão para DLQ" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryChip({ label, count, active }) {
  return (
    <div style={{
      padding: '6px 12px',
      fontSize: 12,
      fontWeight: 500,
      color: active ? t.colors.pure : t.colors.stone,
      backgroundColor: active ? t.colors.navy : t.colors.pure,
      border: `1px solid ${active ? t.colors.navy : t.colors.bone}`,
      borderRadius: 14,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
    }}>
      {label}
      <span style={{
        fontFamily: t.font.mono,
        fontSize: 10,
        color: active ? t.colors.pure : t.colors.slate,
        opacity: 0.7,
      }}>{count}</span>
    </div>
  );
}

function ACLRow({ provider, version, status, last }) {
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: t.colors.ink, marginBottom: 2 }}>{provider}</div>
        <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>{version}</div>
      </div>
      <Badge type="forest">{status}</Badge>
    </div>
  );
}
