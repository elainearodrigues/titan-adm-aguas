import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function KPIsSetoriais() {
  const kpis = [
    { code: 'turb_final_p95', nome: 'Turbidez final · p95', unidade: 'uT', formula: 'percentile(turb_final, 95)', janela: '24h', meta: '≤ 0.5', fonte: 'Portaria 888', tipo: 'qualidade' },
    { code: 'cloro_residual_min', nome: 'Cloro residual mínimo', unidade: 'mg/L', formula: 'min(cloro_final) na rede', janela: '24h', meta: '≥ 0.2', fonte: 'Portaria 888', tipo: 'qualidade' },
    { code: 'eficiencia_energetica', nome: 'Eficiência energética', unidade: 'kWh/m³', formula: 'sum(consumo_kWh) / sum(vaz_tratada_m3)', janela: '30d', meta: 'tendência ↘', fonte: 'KPI operacional', tipo: 'energia' },
    { code: 'consumo_coagulante_m3', nome: 'Consumo de coagulante específico', unidade: 'g/m³', formula: 'sum(massa_coagulante) / sum(vaz_tratada)', janela: '30d', meta: 'tendência ↘', fonte: 'KPI operacional', tipo: 'insumos' },
    { code: 'mtbf_bombas', nome: 'MTBF bombas dosadoras', unidade: 'h', formula: 'tempo_total / num_falhas', janela: '12m', meta: 'tendência ↗', fonte: 'KPI operacional', tipo: 'ativos' },
    { code: 'tempo_carreira_filtro', nome: 'Tempo médio de carreira', unidade: 'h', formula: 'mean(tempo_carreira por filtro)', janela: '7d', meta: '≥ 20h', fonte: 'KPI operacional', tipo: 'operacional' },
    { code: 'conformidade_888_pct', nome: 'Conformidade Portaria 888', unidade: '%', formula: 'qtd_amostras_conformes / total', janela: '30d', meta: '≥ 99.5%', fonte: 'TR §15.1', tipo: 'regulatorio' },
    { code: 'cobertura_amostragem', nome: 'Cobertura do plano de amostragem', unidade: '%', formula: 'qtd_amostras_realizadas / qtd_planejadas', janela: '30d', meta: '100%', fonte: 'Portaria 888', tipo: 'regulatorio' },
    { code: 'taxa_aceitacao_ia', nome: 'Aceitação de recomendações IA', unidade: '%', formula: 'qtd_aceitas / qtd_recomendadas (modo DSS)', janela: '30d', meta: '≥ 80%', fonte: 'TR §15.2', tipo: 'ia' },
    { code: 'pendencias_bloqueantes', nome: 'Pendências bloqueantes ativas', unidade: 'qtd', formula: 'count(pendencia.severidade=bloqueante)', janela: 'instant', meta: '0', fonte: 'KPI operacional', tipo: 'integridade' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão de domínio', 'KPIs setoriais']}
        title="KPIs setoriais"
        lead="Catálogo de indicadores-chave com fórmulas, janelas temporais, metas e fontes regulatórias. Espelhado nos núcleos para cálculo a partir da telemetria."
        actions={<>
          <BtnSecondary>Validar fórmulas</BtnSecondary>
          <BtnPrimary>Novo KPI</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="KPIs catalogados" value="10" hint="núcleo Águas" />
        <Metric label="Vinculados a normas" value="4" hint="888 + TR" />
        <Metric label="Operacionais" value="6" hint="otimização contínua" />
        <Metric label="Em cálculo agora" value="100%" delta="todos os núcleos ativos" deltaPositive />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="ordenação por categoria">Indicadores</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Código</th>
                <th style={thStyle()}>Nome</th>
                <th style={thStyle()}>Fórmula</th>
                <th style={thStyle({ textAlign: 'center' })}>Unidade</th>
                <th style={thStyle({ textAlign: 'center' })}>Janela</th>
                <th style={thStyle()}>Meta</th>
                <th style={thStyle()}>Fonte</th>
              </tr>
            </thead>
            <tbody>
              {kpis.map((k, i) => (
                <tr key={k.code} style={{ borderBottom: i < kpis.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{k.code}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{k.nome}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{k.formula}</td>
                  <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{k.unidade}</td>
                  <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{k.janela}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, color: t.colors.ink })}>{k.meta}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{k.fonte}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <SectionLabel>Atribuição a perfis</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <PerfilKPI perfil="Diretor Executivo" kpis="Conformidade 888 · Eficiência energética · MTBF" desc="Visão consolidada multiplantas" />
            <PerfilKPI perfil="Engenheiro responsável" kpis="Pendências bloqueantes · Taxa de aceitação IA · Tempo de carreira" desc="Operação técnica" />
            <PerfilKPI perfil="Operador" kpis="Turbidez p95 · Cloro residual · Cobertura de amostragem" desc="Tempo real" />
            <PerfilKPI perfil="Gestor regulatório" kpis="Conformidade 888 · Cobertura de amostragem" desc="Reporte ARSESP / SISAGUA" last />
          </div>
        </div>
        <div>
          <SectionLabel>Status de cálculo</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.55, margin: 0, marginBottom: 16 }}>
              Cada KPI é calculado pelos núcleos em janelas próprias. O admin centraliza definições; o cálculo vive perto do dado.
            </p>
            <CalcRow label="Cálculos por minuto" value="1.247" detalhe="distribuídos entre 47 plantas" />
            <CalcRow label="Latência p95" value="84ms" detalhe="meta ≤ 200ms" />
            <CalcRow label="KPIs em refresh contínuo" value="10/10" detalhe="todos atualizados há ≤ 1min" />
            <CalcRow label="Desvios de meta hoje" value="2" detalhe="ETA Guaraú · turb p95" last />
          </div>
        </div>
      </div>
    </div>
  );
}

function PerfilKPI({ perfil, kpis, desc, last }) {
  return (
    <div style={{
      padding: '12px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 500 }}>{perfil}</span>
        <span style={{ fontSize: 11, color: t.colors.slate, fontStyle: 'italic' }}>{desc}</span>
      </div>
      <div style={{ fontSize: 11, color: t.colors.stone, fontFamily: t.font.mono }}>{kpis}</div>
    </div>
  );
}

function CalcRow({ label, value, detalhe, last }) {
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>{detalhe}</div>
      </div>
      <span style={{ fontFamily: t.font.mono, fontSize: 14, fontWeight: 500, color: t.colors.navy }}>{value}</span>
    </div>
  );
}
