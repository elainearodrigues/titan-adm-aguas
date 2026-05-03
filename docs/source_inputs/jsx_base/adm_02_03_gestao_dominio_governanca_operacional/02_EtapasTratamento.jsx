import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function EtapasTratamento() {
  const etapasAguas = [
    { id: 'captacao', nome: 'Captação', categoria: 'entrada', vars: 17, papelISA: 'Process Cell', desc: 'Tomada da água bruta dos mananciais' },
    { id: 'pre_oxidacao', nome: 'Pré-oxidação', categoria: 'tratamento', vars: 4, papelISA: 'Unit', desc: 'Oxidação prévia para remoção de algas e MOM' },
    { id: 'mistura_rapida_coagulacao', nome: 'Mistura rápida e coagulação', categoria: 'tratamento', vars: 9, papelISA: 'Unit', desc: 'Aplicação do coagulante e correção de pH' },
    { id: 'floculacao', nome: 'Floculação', categoria: 'tratamento', vars: 3, papelISA: 'Unit', desc: 'Formação dos flocos por agitação lenta' },
    { id: 'decantacao', nome: 'Decantação', categoria: 'tratamento', vars: 6, papelISA: 'Unit', desc: 'Sedimentação dos flocos formados' },
    { id: 'filtracao', nome: 'Filtração', categoria: 'tratamento', vars: 12, papelISA: 'Unit', desc: 'Polimento por filtro rápido (areia/antracito)' },
    { id: 'correcao_pH_pos', nome: 'Correção de pH pós', categoria: 'ajuste', vars: 1, papelISA: 'Unit', desc: 'Ajuste final do pH para distribuição' },
    { id: 'fluoretacao', nome: 'Fluoretação', categoria: 'ajuste', vars: 1, papelISA: 'Unit', desc: 'Aplicação de flúor (Lei 6.050/1974)' },
    { id: 'desinfeccao', nome: 'Desinfecção', categoria: 'ajuste', vars: 7, papelISA: 'Unit', desc: 'Cloração final e tempo de contato' },
    { id: 'reservacao', nome: 'Reservação', categoria: 'saida', vars: 11, papelISA: 'Storage', desc: 'Armazenamento da água tratada' },
    { id: 'recalque_distribuicao', nome: 'Recalque e distribuição', categoria: 'saida', vars: 6, papelISA: 'Process Cell', desc: 'Bombeamento para a rede pós-ETA' },
    { id: 'tratamento_lodo', nome: 'Tratamento de lodo', categoria: 'auxiliar', vars: 8, papelISA: 'Process Cell', desc: 'Adensamento e desidratação do lodo' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão de domínio', 'Etapas de tratamento']}
        title="Etapas de tratamento"
        lead="Catálogo padronizado de etapas conforme ISA-95. Atende ao requisito R12 (etapas ativas do trem ⊆ TREM_TRATAMENTO_ETAPAS catalogadas)."
        actions={<>
          <BtnSecondary>Domínio: Águas</BtnSecondary>
          <BtnPrimary>Nova etapa</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Etapas catalogadas" value="12" hint="núcleo Águas" />
        <Metric label="Variáveis vinculadas" value="85" hint="distribuídas nas 12" />
        <Metric label="Plantas usando" value="47" hint="ETAs ativas" />
        <Metric label="Trens declarados" value="73" hint="média 1.6 por planta" />
      </div>

      <CalloutBlock tone="info" title="Domínios separados">
        Águas e Efluentes têm catálogos de etapas independentes, espelhados nos respectivos shared kernels. ETE de lodos ativados tem aeração, decantação secundária, recirculação de lodo. ETA tem coagulação, floculação, decantação, filtração. Sem cruzamento.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="12 etapas · ordem operacional">Etapas catalogadas — Águas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID canônico</th>
                <th style={thStyle()}>Nome</th>
                <th style={thStyle()}>Categoria</th>
                <th style={thStyle()}>Papel ISA-95</th>
                <th style={thStyle({ textAlign: 'right' })}>Variáveis</th>
                <th style={thStyle()}>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {etapasAguas.map((e, i) => (
                <tr key={e.id} style={{ borderBottom: i < etapasAguas.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, color: t.colors.navy })}>{e.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{e.nome}</td>
                  <td style={tdStyle()}>
                    {e.categoria === 'entrada' && <Badge type="navy">entrada</Badge>}
                    {e.categoria === 'tratamento' && <Badge type="forest">tratamento</Badge>}
                    {e.categoria === 'ajuste' && <Badge type="ember">ajuste</Badge>}
                    {e.categoria === 'saida' && <Badge type="navy">saída</Badge>}
                    {e.categoria === 'auxiliar' && <Badge type="neutral">auxiliar</Badge>}
                  </td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone, fontFamily: t.font.mono })}>{e.papelISA}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{e.vars}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{e.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Sequência operacional típica — ETA convencional</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <FluxoEtapas etapas={['Captação', 'Pré-oxidação', 'Coagulação', 'Floculação', 'Decantação', 'Filtração', 'Correção pH', 'Fluoretação', 'Desinfecção', 'Reservação']} />
          <div style={{ marginTop: 16, fontSize: 12, color: t.colors.slate, fontFamily: t.font.mono }}>
            Sequência aplicável a 38 das 47 plantas Águas · template "ETA convencional"
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <SectionLabel>Adoção por etapa</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <BarRow label="Captação" value="100%" count={47} pct={100} />
            <BarRow label="Coagulação" value="100%" count={47} pct={100} />
            <BarRow label="Decantação" value="91%" count={43} pct={91} />
            <BarRow label="Filtração" value="100%" count={47} pct={100} />
            <BarRow label="Pré-oxidação" value="62%" count={29} pct={62} />
            <BarRow label="Correção pH" value="79%" count={37} pct={79} />
            <BarRow label="Fluoretação" value="100%" count={47} pct={100} />
            <BarRow label="Desinfecção" value="100%" count={47} pct={100} />
            <BarRow label="Tratamento lodo" value="74%" count={35} pct={74} last />
          </div>
        </div>
        <div>
          <SectionLabel>Hierarquia ISA-95</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.55, margin: 0, marginBottom: 16 }}>
              Cada etapa é classificada conforme ISA-95 para integração com sistemas de manufatura e MES.
            </p>
            <ISARow nivel="Site" exemplo="ETA Campo Limpo" />
            <ISARow nivel="Process Cell" exemplo="Captação · Recalque · Tratamento de lodo" />
            <ISARow nivel="Unit" exemplo="Coagulação · Floculação · Decantação · Filtração" />
            <ISARow nivel="Storage" exemplo="Reservação" />
            <ISARow nivel="Equipment" exemplo="BD-01 · EMEC série K · PAC 1" last />
          </div>
        </div>
      </div>
    </div>
  );
}

function FluxoEtapas({ etapas }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
      {etapas.map((e, i) => (
        <React.Fragment key={i}>
          <span style={{
            padding: '6px 12px',
            backgroundColor: t.colors.navyMist,
            color: t.colors.navy,
            fontSize: 11,
            fontWeight: 500,
            border: `1px solid ${t.colors.navy}`,
            borderRadius: 2,
            whiteSpace: 'nowrap',
          }}>{e}</span>
          {i < etapas.length - 1 && (
            <span style={{ color: t.colors.mist, fontSize: 14 }}>→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function BarRow({ label, value, count, pct, last }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, fontWeight: 500 }}>{label}</span>
        <span style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.stone }}>{value} · {count} plantas</span>
      </div>
      <div style={{ height: 4, backgroundColor: t.colors.bone, borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', backgroundColor: t.colors.navy }} />
      </div>
    </div>
  );
}

function ISARow({ nivel, exemplo, last }) {
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
    }}>
      <span style={{ fontSize: 12, fontWeight: 500, fontFamily: t.font.mono, color: t.colors.navy }}>{nivel}</span>
      <span style={{ fontSize: 12, color: t.colors.stone, textAlign: 'right' }}>{exemplo}</span>
    </div>
  );
}
