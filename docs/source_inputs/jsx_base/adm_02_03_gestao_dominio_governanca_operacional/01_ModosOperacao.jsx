import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function ModosOperacao() {
  const loops = [
    { planta: 'ETA Campo Limpo', loop: 'Coagulação', modo: 'suporte_decisao', desde: '15 mar 2026', taxaAceite: '87%', envelope: 'ENV-CLP-COAG-v4.1' },
    { planta: 'ETA Campo Limpo', loop: 'Pré-oxidação', modo: 'manual', desde: '01 jan 2026', taxaAceite: '—', envelope: '—' },
    { planta: 'ETA Campo Limpo', loop: 'Correção pH pós', modo: 'suporte_decisao', desde: '20 mar 2026', taxaAceite: '92%', envelope: 'ENV-CLP-PH-v2.0' },
    { planta: 'ETA Campo Limpo', loop: 'Desinfecção', modo: 'automatico', desde: '01 abr 2026', taxaAceite: '—', envelope: 'ENV-CLP-DES-v3.2' },
    { planta: 'ETA Campo Limpo', loop: 'Fluoretação', modo: 'automatico', desde: '01 abr 2026', taxaAceite: '—', envelope: 'ENV-CLP-FLU-v1.4' },
    { planta: 'ETA Guaraú', loop: 'Coagulação', modo: 'suporte_decisao', desde: '12 fev 2026', taxaAceite: '78%', envelope: 'ENV-GUA-COAG-v2.3' },
    { planta: 'ETA Guaraú', loop: 'Desinfecção', modo: 'automatico', desde: '15 fev 2026', taxaAceite: '—', envelope: 'ENV-GUA-DES-v2.1' },
    { planta: 'ETA Rio Claro', loop: 'Coagulação', modo: 'manual', desde: 'sempre', taxaAceite: '—', envelope: '—' },
  ];

  const transicoes = [
    { ts: '02 mai 09:42', planta: 'ETA Campo Limpo', loop: 'Desinfecção', de: 'suporte_decisao', para: 'automatico', user: 'Marina + Eduardo', motivo: 'Comissionamento Fase 3 concluído' },
    { ts: '01 mai 14:18', planta: 'ETA Guaraú', loop: 'Coagulação', de: 'manual', para: 'suporte_decisao', user: 'Marina Costa', motivo: 'Início de comissionamento DSS' },
    { ts: '28 abr 22:15', planta: 'ETA Campo Limpo', loop: 'Coagulação', de: 'automatico', para: 'suporte_decisao', user: 'sistema', motivo: 'Fallback automático · violação envelope' },
    { ts: '20 abr 08:30', planta: 'ETA Rio Claro', loop: 'Pré-oxidação', de: 'suporte_decisao', para: 'manual', user: 'Eduardo Tavares', motivo: 'Manutenção em sensor turb_bruta' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Governança operacional', 'Modos de operação']}
        title="Modos de operação"
        lead="Controle hierárquico Manual / Suporte à Decisão / Automático por planta e por loop. Transições para Automático exigem dupla aprovação. Fallback automático preserva segurança."
        actions={<>
          <BtnSecondary>Histórico completo</BtnSecondary>
          <BtnPrimary>Propor transição</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Loops em Manual" value="3" hint="observação · sem aplicação" />
        <Metric label="Loops em DSS" value="3" hint="aceite a cada recomendação" />
        <Metric label="Loops em Automático" value="3" hint="dentro do envelope" />
        <Metric label="Fallbacks 30d" value="1" hint="ETA Campo Limpo · 28 abr" />
      </div>

      <CalloutBlock tone="info" title="Os três modos hierárquicos">
        Manual: plataforma observa e analisa, sem aplicar recomendações ao processo. Suporte à Decisão: plataforma sugere doses e ajustes; cada recomendação requer aceite explícito do operador. Automático: plataforma aplica recomendações validadas dentro do envelope de segurança. Fallback automático para DSS ou Manual ocorre se o envelope for violado.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="modo declarado por loop · não por planta">Estado atual dos loops</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle()}>Loop de controle</th>
                <th style={thStyle({ textAlign: 'center' })}>Modo</th>
                <th style={thStyle()}>Desde</th>
                <th style={thStyle({ textAlign: 'center' })}>Aceite (DSS)</th>
                <th style={thStyle()}>Envelope ativo</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {loops.map((l, i) => (
                <tr key={i} style={{ borderBottom: i < loops.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{l.planta}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{l.loop}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <ModoPill modo={l.modo} />
                  </td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{l.desde}</td>
                  <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 12 })}>{l.taxaAceite}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: l.envelope === '—' ? t.colors.mist : t.colors.navy })}>{l.envelope}</td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Detalhes</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="auditável · imutável">Histórico de transições</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Timestamp</th>
                <th style={thStyle()}>Planta · Loop</th>
                <th style={thStyle({ textAlign: 'center' })}>Transição</th>
                <th style={thStyle()}>Por</th>
                <th style={thStyle()}>Motivo</th>
              </tr>
            </thead>
            <tbody>
              {transicoes.map((tr, i) => (
                <tr key={i} style={{ borderBottom: i < transicoes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{tr.ts}</td>
                  <td style={tdStyle({ fontSize: 12 })}>
                    <span style={{ fontWeight: 500 }}>{tr.planta}</span>
                    <span style={{ color: t.colors.slate }}> · {tr.loop}</span>
                  </td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
                      <ModoPill modo={tr.de} small />
                      <span style={{ color: t.colors.mist, fontSize: 12 }}>→</span>
                      <ModoPill modo={tr.para} small />
                    </div>
                  </td>
                  <td style={tdStyle({ fontSize: 12, color: tr.user === 'sistema' ? t.colors.slate : t.colors.ink, fontStyle: tr.user === 'sistema' ? 'italic' : 'normal' })}>{tr.user}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{tr.motivo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Hierarquia operacional</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            <ModoCard
              modo="manual"
              title="Manual"
              desc="Plataforma observa e analisa. Não aplica recomendações ao processo."
              decisao="Operador da estação"
              transicao="Sem requisitos especiais"
            />
            <ModoCard
              modo="suporte_decisao"
              title="Suporte à decisão"
              desc="Plataforma sugere doses e ajustes com explicação causal. Cada recomendação requer aceite explícito."
              decisao="Operador aceita ou rejeita"
              transicao="Aprovação simples por engenheiro responsável"
            />
            <ModoCard
              modo="automatico"
              title="Automático"
              desc="Plataforma aplica recomendações validadas dentro do envelope de segurança. Habilitado apenas após aprovação formal."
              decisao="Plataforma · operador pode reverter"
              transicao="Dupla aprovação por engenheiros responsáveis"
              last
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModoPill({ modo, small }) {
  const map = {
    manual: { type: 'rust', label: 'Manual' },
    suporte_decisao: { type: 'navy', label: 'DSS' },
    automatico: { type: 'forest', label: 'Auto' },
  };
  const m = map[modo] || map.manual;
  return <Pill type={m.type} filled>{m.label}</Pill>;
}

function ModoCard({ modo, title, desc, decisao, transicao, last }) {
  const colorMap = {
    manual: t.colors.rust,
    suporte_decisao: t.colors.navy,
    automatico: t.colors.forest,
  };
  const c = colorMap[modo];
  return (
    <div style={{
      padding: '0 24px',
      borderRight: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{
        width: 8,
        height: 8,
        backgroundColor: c,
        marginBottom: 12,
      }} />
      <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 8, color: t.colors.ink }}>{title}</div>
      <div style={{ fontSize: 12, color: t.colors.stone, lineHeight: 1.55, marginBottom: 16 }}>{desc}</div>
      <div style={{ borderTop: `1px solid ${t.colors.bone}`, paddingTop: 12, fontSize: 11 }}>
        <div style={{ marginBottom: 8 }}>
          <div style={{ color: t.colors.slate, fontFamily: t.font.mono, marginBottom: 2 }}>QUEM DECIDE</div>
          <div style={{ color: t.colors.ink }}>{decisao}</div>
        </div>
        <div>
          <div style={{ color: t.colors.slate, fontFamily: t.font.mono, marginBottom: 2 }}>TRANSIÇÃO</div>
          <div style={{ color: t.colors.ink }}>{transicao}</div>
        </div>
      </div>
    </div>
  );
}
