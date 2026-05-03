import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function GemeoDigital() {
  const cenarios = [
    { id: 'wi_a4f2e891', planta: 'ETA Campo Limpo', cenario: 'Aumentar PAC para 18 mg/L', autor: 'Marina Costa', criado: '02 mai 14:18', perfil: 'eng_responsavel', impacto: 'turb decantada -23%', status: 'ativo' },
    { id: 'wi_b8c3d172', planta: 'ETA Campo Limpo', cenario: 'Reduzir vazão captação 15%', autor: 'Eduardo Tavares', criado: '02 mai 11:42', perfil: 'eng_responsavel', impacto: 'tempo carreira +8h', status: 'ativo' },
    { id: 'wi_c1e7f455', planta: 'ETA Guaraú', cenario: 'Adicionar pré-oxidação 1.5 mg/L', autor: 'Marina Costa', criado: '01 mai 16:30', perfil: 'eng_responsavel', impacto: 'consumo cloro pós -12%', status: 'arquivado' },
    { id: 'wi_d9b4a803', planta: 'ETA Campo Limpo', cenario: 'Mistura Paiva Castro 30%', autor: 'Marina Costa', criado: '28 abr 10:15', perfil: 'eng_responsavel', impacto: 'pH bruta -0.4', status: 'arquivado' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Governança operacional', 'Gêmeo digital']}
        title="Gêmeo digital"
        lead="Configuração governada de cenários what-if. Limites herdados dos envelopes de segurança. Comparação real / recomendação calculada / cenário hipotético."
        actions={<>
          <BtnSecondary>Exportar cenário</BtnSecondary>
          <BtnPrimary>Novo cenário what-if</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Cenários ativos" value="2" hint="ETA Campo Limpo" />
        <Metric label="Cenários arquivados" value="47" hint="histórico 90d" />
        <Metric label="Tempo médio de simulação" value="4.2s" hint="meta ≤ 10s" />
        <Metric label="Sessões abertas agora" value="3" hint="2 plantas distintas" />
      </div>

      <CalloutBlock tone="info" title="Política de comparação tripla">
        Toda sessão do gêmeo digital exibe três curvas em paralelo: estado real (telemetria), recomendação calculada (modelo do núcleo) e cenário hipotético (manipulação do operador). Diferenças explicadas em painel causal.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        <div>
          <SectionLabel>Permissões por perfil</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <PermRow perfil="Operador" pode="Visualizar cenários ativos · executar templates pré-aprovados" naoPode="Modificar setpoints fora do envelope" />
            <PermRow perfil="Analista" pode="Criar cenários · executar simulações · exportar relatórios" naoPode="Promover cenário a recomendação operacional" />
            <PermRow perfil="Engenheiro responsável" pode="Tudo de analista + ampliar limites com aprovação · promover cenário" naoPode="Forçar valor fora do envelope sem documentação" />
            <PermRow perfil="Gestor" pode="Visualizar cenários · aprovar promoções" naoPode="Editar parâmetros técnicos" last />
          </div>
        </div>

        <div>
          <SectionLabel>Política de retenção de sessões</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <ToggleField label="Cenários ativos" checked={true} helper="Visíveis · sem prazo de expiração" />
            <ToggleField label="Cenários arquivados" checked={true} helper="Retenção 90 dias · após isso só dump" />
            <ToggleField label="Cenários promovidos a recomendação" checked={true} helper="Retenção 7 anos · cadeia de evidência" />
            <ToggleField label="Snapshots de estado real comparados" checked={true} helper="Retenção 30 dias · alinha com telemetria raw" />
            <ToggleField label="Logs de simulação detalhados" checked={true} helper="Retenção 14 dias" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="2 ativos · 47 arquivados (mostrando 4)">Cenários what-if</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID sessão</th>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle()}>Cenário</th>
                <th style={thStyle()}>Autor</th>
                <th style={thStyle()}>Perfil</th>
                <th style={thStyle()}>Impacto previsto</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {cenarios.map((c, i) => (
                <tr key={c.id} style={{ borderBottom: i < cenarios.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{c.id}</td>
                  <td style={tdStyle({ fontSize: 12, fontWeight: 500 })}>{c.planta}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.ink })}>{c.cenario}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{c.autor}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono })}>{c.perfil}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.forest, fontFamily: t.font.mono })}>{c.impacto}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {c.status === 'ativo'
                      ? <Pill type="forest" filled>ativo</Pill>
                      : <Pill type="neutral">arquivado</Pill>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <SectionLabel>Limites herdados dos envelopes</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.55, margin: 0, marginBottom: 16 }}>
              O gêmeo digital não permite simulações com valores fora dos limites do envelope vigente. Para cenários de comissionamento que ultrapassem os limites, exige-se nova versão de envelope com aprovação dupla.
            </p>
            <InheritedRow envelope="ENV-CLP-COAG-v4.1" param="dos_coagulante_real" range="6.0 → 28.0 mg/L" />
            <InheritedRow envelope="ENV-CLP-DES-v3.2" param="dos_cloro_pos_real" range="1.5 → 4.0 mg/L" />
            <InheritedRow envelope="ENV-CLP-PH-v2.0" param="pH_pos_correcao" range="6.5 → 8.5 pH" last />
          </div>
        </div>

        <div>
          <SectionLabel>Promoção a recomendação operacional</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.55, margin: 0, marginBottom: 16 }}>
              Cenários what-if podem ser promovidos a recomendação operacional permanente após aprovação por engenheiro responsável.
            </p>
            <FlowStep n="01" title="Cenário criado" desc="Analista ou eng. responsável simula no gêmeo digital" />
            <FlowStep n="02" title="Validação técnica" desc="Resultados comparados com histórico, faixas e envelope" />
            <FlowStep n="03" title="Aprovação" desc="Eng. responsável aprova promoção formalmente" />
            <FlowStep n="04" title="Cadeia de evidência" desc="Sessão arquivada por 7 anos com snapshot de estado" last />
          </div>
        </div>
      </div>
    </div>
  );
}

function PermRow({ perfil, pode, naoPode, last }) {
  return (
    <div style={{
      padding: '14px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 8, color: t.colors.ink }}>{perfil}</div>
      <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 8, marginBottom: 4 }}>
        <span style={{ fontSize: 10, fontFamily: t.font.mono, color: t.colors.forest, fontWeight: 500 }}>PODE</span>
        <span style={{ fontSize: 11, color: t.colors.stone, lineHeight: 1.5 }}>{pode}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 8 }}>
        <span style={{ fontSize: 10, fontFamily: t.font.mono, color: t.colors.rust, fontWeight: 500 }}>NÃO</span>
        <span style={{ fontSize: 11, color: t.colors.stone, lineHeight: 1.5 }}>{naoPode}</span>
      </div>
    </div>
  );
}

function InheritedRow({ envelope, param, range, last }) {
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <span style={{ fontSize: 12, fontWeight: 500, fontFamily: t.font.mono, color: t.colors.navy }}>{param}</span>
        <span style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.stone }}>{range}</span>
      </div>
      <div style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>de {envelope}</div>
    </div>
  );
}

function FlowStep({ n, title, desc, last }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '32px 1fr',
      gap: 12,
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <span style={{
        fontSize: 11,
        fontFamily: t.font.mono,
        color: t.colors.navy,
        fontWeight: 500,
        paddingTop: 2,
      }}>{n}</span>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2 }}>{title}</div>
        <div style={{ fontSize: 11, color: t.colors.stone, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  );
}
