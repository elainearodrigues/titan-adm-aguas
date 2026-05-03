import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function ModelosIA() {
  const modelos = [
    { id: 'coag_pac_xgb', nome: 'Coagulação PAC · XGBoost v2.4', planta: 'ETA Campo Limpo', loop: 'Coagulação', aprovado: '15 mar 2026', taxaAceite: '87%', driftAlert: 'verde', amostras: '24.7k', status: 'producao' },
    { id: 'coag_pac_bayes', nome: 'Coagulação PAC · Bayesian v1.2', planta: 'ETA Campo Limpo', loop: 'Coagulação', aprovado: '20 abr 2026', taxaAceite: '—', driftAlert: 'verde', amostras: '4.1k', status: 'shadow' },
    { id: 'cloro_pos_lstm', nome: 'Cloro pós · LSTM v1.8', planta: 'ETA Campo Limpo', loop: 'Desinfecção', aprovado: '01 abr 2026', taxaAceite: '94%', driftAlert: 'verde', amostras: '18.3k', status: 'producao' },
    { id: 'fluor_dose_linear', nome: 'Flúor · Linear v1.4', planta: 'ETA Campo Limpo', loop: 'Fluoretação', aprovado: '01 abr 2026', taxaAceite: '99%', driftAlert: 'verde', amostras: '17.9k', status: 'producao' },
    { id: 'coag_gua_xgb', nome: 'Coagulação · XGBoost v2.3', planta: 'ETA Guaraú', loop: 'Coagulação', aprovado: '12 fev 2026', taxaAceite: '78%', driftAlert: 'amarelo', amostras: '21.2k', status: 'producao' },
    { id: 'cloro_gua_lstm', nome: 'Cloro · LSTM v1.6', planta: 'ETA Guaraú', loop: 'Desinfecção', aprovado: '15 fev 2026', taxaAceite: '91%', driftAlert: 'verde', amostras: '15.8k', status: 'producao' },
  ];

  const aprovacoes = [
    { modelo: 'Coagulação PAC · Bayesian v1.2', planta: 'ETA Campo Limpo', proposto: '15 abr 2026', autor: 'Núcleo Águas · P&D', justif: 'Substituir XGBoost com 8% melhor explicabilidade · 12% melhor robustez sazonal', status: 'shadow' },
    { modelo: 'Distribuição cloro · GNN v0.3', planta: 'ETA Campo Limpo', proposto: '02 mai 2026', autor: 'Núcleo Águas · P&D', justif: 'Modelo experimental para Fase 3 · roadmap 2028', status: 'avaliacao' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Governança operacional', 'Modelos de IA']}
        title="Modelos de IA habilitados"
        lead="Whitelist de modelos por planta com model card resumido, taxa de aceitação operacional, indicadores de saúde estatística e fluxo de aprovação para promoção a produção."
        actions={<>
          <BtnSecondary>Auditar deploys</BtnSecondary>
          <BtnPrimary>Propor novo modelo</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Modelos em produção" value="5" hint="2 plantas · 3 loops" />
        <Metric label="Em modo shadow" value="1" hint="Bayesian Campo Limpo" />
        <Metric label="Aceite médio" value="91%" delta="meta TR §15.2 ≥ 80%" deltaPositive />
        <Metric label="Drift alerts ativos" value="1" hint="ETA Guaraú · amarelo" />
      </div>

      <CalloutBlock tone="info" title="Modelos vivem nos núcleos · admin governa whitelist">
        Os pesos, código de inferência e pipelines de retreinamento dos modelos vivem dentro do shared kernel de cada núcleo (Águas e Efluentes). Esta página administra apenas: quais modelos estão autorizados a operar em cada planta, em que modo, e com que governança de promoção.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="6 ativos · whitelist por planta">Modelos habilitados</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Modelo</th>
                <th style={thStyle()}>Planta · loop</th>
                <th style={thStyle()}>Aprovado em</th>
                <th style={thStyle({ textAlign: 'right' })}>Aceite</th>
                <th style={thStyle({ textAlign: 'right' })}>Amostras 30d</th>
                <th style={thStyle({ textAlign: 'center' })}>Saúde</th>
                <th style={thStyle({ textAlign: 'center' })}>Modo</th>
              </tr>
            </thead>
            <tbody>
              {modelos.map((m, i) => (
                <tr key={m.id} style={{ borderBottom: i < modelos.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>
                    <div>{m.nome}</div>
                    <div style={{ fontSize: 10, fontFamily: t.font.mono, color: t.colors.slate }}>{m.id}</div>
                  </td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>
                    <div>{m.planta}</div>
                    <div style={{ fontSize: 10, color: t.colors.slate }}>{m.loop}</div>
                  </td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{m.aprovado}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: m.taxaAceite === '—' ? t.colors.mist : t.colors.ink })}>{m.taxaAceite}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{m.amostras}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <span style={{
                      width: 8, height: 8, borderRadius: 4, display: 'inline-block',
                      backgroundColor: m.driftAlert === 'verde' ? t.colors.forest : m.driftAlert === 'amarelo' ? t.colors.ember : t.colors.rust,
                    }} />
                  </td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {m.status === 'producao' && <Pill type="forest" filled>produção</Pill>}
                    {m.status === 'shadow' && <Pill type="navy" filled>shadow</Pill>}
                    {m.status === 'avaliacao' && <Pill type="ember">avaliação</Pill>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Model card · Coagulação PAC · XGBoost v2.4</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            <CardColumn title="Identificação">
              <CardRow label="Modelo" value="XGBoost regression" />
              <CardRow label="Versão" value="v2.4 · trained 14 mar 2026" />
              <CardRow label="Variáveis de entrada" value="turb_bruta · pH_bruta · vaz_bruta · temp_bruta · jar_test_recente" />
              <CardRow label="Saída" value="dos_coagulante_recomendado (mg/L)" />
            </CardColumn>
            <CardColumn title="Performance">
              <CardRow label="MAE no holdout" value="0.84 mg/L" />
              <CardRow label="RMSE no holdout" value="1.12 mg/L" />
              <CardRow label="R² no holdout" value="0.91" />
              <CardRow label="Cobertura intervalo 95%" value="94.3%" />
            </CardColumn>
            <CardColumn title="Governança" last>
              <CardRow label="Aprovado por" value="Marina Costa + Eduardo Tavares" />
              <CardRow label="Aprovação em" value="15 mar 2026 · 16:42" />
              <CardRow label="Próxima revisão obrigatória" value="15 set 2026" />
              <CardRow label="Drift gatilho" value="MAE > 1.5 mg/L em janela 7d" />
            </CardColumn>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="2 propostas pendentes">Aprovações em curso</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Modelo</th>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle()}>Proposto em</th>
                <th style={thStyle()}>Por</th>
                <th style={thStyle()}>Justificativa</th>
                <th style={thStyle({ textAlign: 'center' })}>Estágio</th>
              </tr>
            </thead>
            <tbody>
              {aprovacoes.map((a, i) => (
                <tr key={i} style={{ borderBottom: i < aprovacoes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{a.modelo}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{a.planta}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{a.proposto}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{a.autor}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic', maxWidth: 320 })}>{a.justif}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {a.status === 'shadow' && <Badge type="navy">shadow</Badge>}
                    {a.status === 'avaliacao' && <Badge type="ember">avaliação</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Fluxo de promoção a produção</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, alignItems: 'flex-start' }}>
            <PromoStep n="01" title="Avaliação" desc="Modelo proposto pelo núcleo · benchmarks publicados · model card preliminar" />
            <PromoStep n="02" title="Shadow mode" desc="Roda em paralelo ao modelo de produção · não atua · 30 dias mínimo" />
            <PromoStep n="03" title="Comparação" desc="MAE / RMSE / R² · cobertura de intervalo · concordância com operadores" />
            <PromoStep n="04" title="Aprovação dupla" desc="Engenheiro responsável + Núcleo · model card formal" />
            <PromoStep n="05" title="Produção" desc="Modelo anterior arquivado · revisão obrigatória em 6 meses" last />
          </div>
        </div>
      </div>
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

function CardRow({ label, value }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: 12, color: t.colors.ink, lineHeight: 1.4 }}>{value}</div>
    </div>
  );
}

function PromoStep({ n, title, desc, last }) {
  return (
    <div style={{ paddingRight: last ? 0 : 8 }}>
      <div style={{
        fontSize: 11,
        fontFamily: t.font.mono,
        color: t.colors.navy,
        fontWeight: 500,
        marginBottom: 6,
      }}>{n}</div>
      <div style={{
        height: 2,
        backgroundColor: t.colors.bone,
        marginBottom: 10,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: 2,
          backgroundColor: last ? t.colors.bone : t.colors.navy,
        }} />
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 11, color: t.colors.stone, lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}
