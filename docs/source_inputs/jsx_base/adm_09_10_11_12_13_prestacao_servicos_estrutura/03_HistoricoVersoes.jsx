import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function HistoricoVersoes() {
  const versoes = [
    { v: 'v3.2', template: 'ETA convencional', data: '15 mar 2026', autor: 'Marina Costa + Eduardo Tavares', mudancas: 'Atualização para Portaria 888/2021 v2024.3 · adiciona variável tempo_carreira_filtro_n', plantas_migradas: '38/38' },
    { v: 'v3.1', template: 'ETA convencional', data: '20 ago 2025', autor: 'Marina Costa + Eduardo Tavares', mudancas: 'Adiciona faixa típica para dos_cloro_pos_real · ajusta limite máximo turbidez decantada', plantas_migradas: '38/38' },
    { v: 'v3.0', template: 'ETA convencional', data: '03 jul 2024', autor: 'Marina Costa + Carlos Eduardo', mudancas: 'Reestruturação para Lei 14.026/2020 · separa fluoretação como etapa autônoma · alinhamento ISA-95', plantas_migradas: '38/38' },
    { v: 'v2.8', template: 'Filtração direta', data: '02 fev 2026', autor: 'Marina Costa + Pedro Lacerda', mudancas: 'Atualização Portaria 888 v2024.3 · adiciona pré-oxidação como opcional', plantas_migradas: '6/6' },
    { v: 'v2.7', template: 'Filtração direta', data: '15 jun 2025', autor: 'Marina Costa + Pedro Lacerda', mudancas: 'Ajuste limites máximos coagulante para mananciais com baixa turbidez', plantas_migradas: '6/6' },
    { v: 'v2.4', template: 'Dupla filtração', data: '10 jan 2026', autor: 'Eduardo Tavares + Pedro Lacerda', mudancas: 'Inclusão de rotina de retrolavagem entre filtros ascendente e rápido', plantas_migradas: '3/3' },
  ];

  const migracoes = [
    { ts: '15 mar 2026', planta: 'ETA Campo Limpo', de: 'v3.1', para: 'v3.2', responsavel: 'Marina Costa', resultado: 'sucesso', notas: 'Auto-mapeamento · 0 customizações afetadas' },
    { ts: '15 mar 2026', planta: 'ETA Guaraú', de: 'v3.1', para: 'v3.2', responsavel: 'Marina Costa', resultado: 'sucesso', notas: 'Auto-mapeamento · 1 customização revisada' },
    { ts: '15 mar 2026', planta: 'ETA Taiaçupeba', de: 'v3.1', para: 'v3.2', responsavel: 'Eduardo Tavares', resultado: 'sucesso', notas: 'Auto-mapeamento · 0 customizações afetadas' },
    { ts: '02 fev 2026', planta: 'ETA Capivari', de: 'v2.7', para: 'v2.8', responsavel: 'Marina Costa', resultado: 'sucesso', notas: 'Adição de pré-oxidação opcional · não ativada' },
    { ts: '10 jan 2026', planta: 'ETA Jiquí', de: 'v2.3', para: 'v2.4', responsavel: 'Pedro Lacerda', resultado: 'parcial', notas: 'Mapeamento manual · análise reagentes pendente' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Templates regulatórios', 'Histórico de versões']}
        title="Histórico de versões"
        lead="Trilha auditável de mudanças nos templates Águas. Cada versão é imutável, com aprovação dupla, registro de plantas migradas e changelog técnico."
        actions={<>
          <BtnSecondary>Comparar versões</BtnSecondary>
          <BtnPrimary>Propor nova versão</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Versionamento imutável · auditoria 7 anos</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Versões catalogadas" value="12" hint="3 templates · 4 versões/cada" />
        <Metric label="Templates ativos" value="3" hint="versões mais recentes" />
        <Metric label="Migrações 2026" value="47" hint="todas plantas" />
        <Metric label="Última versão" value="v3.2" hint="ETA conv. · 15 mar 2026" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Templates Águas" count={3} />
        <SubTab label="Detalhe & customizações" />
        <SubTab label="Histórico de versões" active />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="6 versões mostradas · 12 totais">Versões publicadas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Versão</th>
                <th style={thStyle()}>Template</th>
                <th style={thStyle()}>Publicado em</th>
                <th style={thStyle()}>Aprovadores</th>
                <th style={thStyle()}>Mudanças</th>
                <th style={thStyle({ textAlign: 'right' })}>Migração</th>
              </tr>
            </thead>
            <tbody>
              {versoes.map((v, i) => (
                <tr key={`${v.template}_${v.v}`} style={{ borderBottom: i < versoes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, fontWeight: 500, color: t.colors.navy })}>{v.v}</td>
                  <td style={tdStyle({ fontSize: 12, fontWeight: 500 })}>{v.template}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{v.data}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{v.autor}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' })}>{v.mudancas}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 11, color: t.colors.forest, fontWeight: 500 })}>{v.plantas_migradas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="histórico recente · auditável">Migrações de plantas entre versões</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Data</th>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle({ textAlign: 'center' })}>Migração</th>
                <th style={thStyle()}>Responsável</th>
                <th style={thStyle({ textAlign: 'center' })}>Resultado</th>
                <th style={thStyle()}>Notas</th>
              </tr>
            </thead>
            <tbody>
              {migracoes.map((m, i) => (
                <tr key={i} style={{ borderBottom: i < migracoes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{m.ts}</td>
                  <td style={tdStyle({ fontSize: 12, fontWeight: 500 })}>{m.planta}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', fontFamily: t.font.mono, fontSize: 11 }}>
                      <span style={{ color: t.colors.slate }}>{m.de}</span>
                      <span style={{ color: t.colors.mist }}>→</span>
                      <span style={{ color: t.colors.navy, fontWeight: 500 }}>{m.para}</span>
                    </div>
                  </td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{m.responsavel}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {m.resultado === 'sucesso' ? <Badge type="forest">sucesso</Badge> : <Badge type="ember">parcial</Badge>}
                  </td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' })}>{m.notas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CalloutBlock tone="info" title="Política de versionamento de templates">
        Versões maiores (v3.0 → v4.0) reestruturam etapas e exigem migração assistida com plano de ação por planta. Versões menores (v3.1 → v3.2) são compatíveis com auto-mapeamento e migração em lote. Toda mudança requer dupla aprovação e mantém imutabilidade da versão anterior por 7 anos.
      </CalloutBlock>
    </div>
  );
}

function SubTab({ label, active, count }) {
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
          backgroundColor: t.colors.bone,
          color: t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
    </div>
  );
}
