import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function CatalogoVariaveis() {
  const variaveis = [
    { code: 'dos_coagulante_real', label: 'Dosagem de coagulante real', unidade: 'mg/L', etapa: 'mistura_rapida_coagulacao', categoria: 'Dosagem', nivel: 'critica' },
    { code: 'dos_alcalinizante_real', label: 'Dosagem de alcalinizante real', unidade: 'mg/L', etapa: 'mistura_rapida_coagulacao', categoria: 'Dosagem', nivel: 'critica' },
    { code: 'dos_cloro_pre_real', label: 'Dosagem de cloro pré real', unidade: 'mg/L', etapa: 'pre_oxidacao', categoria: 'Dosagem', nivel: 'critica' },
    { code: 'dos_cloro_pos_real', label: 'Dosagem de cloro pós real', unidade: 'mg/L', etapa: 'desinfeccao', categoria: 'Dosagem', nivel: 'critica' },
    { code: 'dos_fluor_real', label: 'Dosagem de flúor real', unidade: 'mg/L', etapa: 'fluoretacao', categoria: 'Dosagem', nivel: 'critica' },
    { code: 'turb_bruta', label: 'Turbidez da água bruta', unidade: 'uT', etapa: 'captacao', categoria: 'Qualidade', nivel: 'recomendada' },
    { code: 'pH_bruta', label: 'pH da água bruta', unidade: 'pH', etapa: 'captacao', categoria: 'Qualidade', nivel: 'recomendada' },
    { code: 'turb_decantada', label: 'Turbidez da água decantada', unidade: 'uT', etapa: 'decantacao', categoria: 'Qualidade', nivel: 'recomendada' },
    { code: 'turb_final', label: 'Turbidez final', unidade: 'uT', etapa: 'reservacao', categoria: 'Qualidade', nivel: 'recomendada' },
    { code: 'cloro_final', label: 'Cloro residual livre final', unidade: 'mg/L', etapa: 'reservacao', categoria: 'Qualidade', nivel: 'recomendada' },
    { code: 'fluor_final', label: 'Flúor final', unidade: 'mg/L', etapa: 'reservacao', categoria: 'Qualidade', nivel: 'recomendada' },
    { code: 'vaz_bruta_total', label: 'Vazão total dos mananciais', unidade: 'L/s', etapa: 'captacao', categoria: 'Hidráulica', nivel: 'recomendada' },
    { code: 'consumo_energia_eeab', label: 'Consumo de energia da EEAB', unidade: 'kWh', etapa: 'captacao', categoria: 'Energia', nivel: 'recomendada' },
    { code: 'dos_polimero_real', label: 'Dosagem de polímero auxiliar', unidade: 'mg/L', etapa: 'mistura_rapida_coagulacao', categoria: 'Dosagem', nivel: 'condicional' },
    { code: 'dos_clorito_real', label: 'Dosagem de clorito (geração ClO2)', unidade: 'mg/L', etapa: 'desinfeccao', categoria: 'Dosagem', nivel: 'condicional' },
    { code: 'producao_ClO2_kg_h', label: 'Produção de ClO2 in loco', unidade: 'kg/h', etapa: 'desinfeccao', categoria: 'Dosagem', nivel: 'condicional' },
    { code: 'turb_filtrada_filtro_n', label: 'Turbidez filtrada por filtro', unidade: 'uT', etapa: 'filtracao', categoria: 'Qualidade', nivel: 'opcional' },
    { code: 'perda_carga_filtro_n', label: 'Perda de carga por filtro', unidade: 'mca', etapa: 'filtracao', categoria: 'Hidráulica', nivel: 'opcional' },
    { code: 'tempo_carreira_filtro_n', label: 'Tempo de carreira do filtro', unidade: 'h', etapa: 'filtracao', categoria: 'Operacional', nivel: 'opcional' },
  ];

  const counts = { critica: 5, recomendada: 17, opcional: 57, condicional: 6, especifica: 0 };

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão de domínio', 'Catálogo de variáveis']}
        title="Catálogo de variáveis"
        lead="Modelo de dados central da plataforma. 85 variáveis universais distribuídas em 5 níveis de universalidade e 12 etapas de tratamento. Espelhado para cada núcleo (Águas e Efluentes)."
        actions={<>
          <BtnSecondary>Exportar catálogo</BtnSecondary>
          <BtnPrimary>Nova variável</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 24 }}>
        <Metric label="Críticas" value="5" hint="todas dosagens" />
        <Metric label="Recomendadas" value="17" hint="quase toda ETA" />
        <Metric label="Opcionais" value="57" hint="análise granular" />
        <Metric label="Condicionais" value="6" hint="conforme processo" />
        <Metric label="Total" value="85" delta="núcleo Águas v1.2" deltaPositive />
      </div>

      <CalloutBlock tone="info" title="Hierarquia de universalidade">
        Crítica bloqueia operação automática se ausente. Recomendada gera pendência informativa. Opcional habilita análise granular se presente. Condicional cobrada apenas quando processo associado está ativo. Específica da planta vive em aggregate VariavelEspecificaPlanta separado.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <FilterChip label="Todas" count={85} active />
        <FilterChip label="Crítica" count={5} dot={t.colors.rust} />
        <FilterChip label="Recomendada" count={17} dot={t.colors.ember} />
        <FilterChip label="Opcional" count={57} dot={t.colors.navy} />
        <FilterChip label="Condicional" count={6} dot={t.colors.forest} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="núcleo Águas · cliente não edita (R14)">Variáveis universais</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <div style={{ padding: '10px 16px', borderBottom: `1px solid ${t.colors.bone}`, backgroundColor: t.colors.paper, display: 'flex', gap: 8 }}>
            <Field placeholder="Buscar por código, rótulo ou etapa..." mono />
            <BtnSecondary>Filtros</BtnSecondary>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Código</th>
                <th style={thStyle()}>Rótulo</th>
                <th style={thStyle()}>Unidade</th>
                <th style={thStyle()}>Etapa</th>
                <th style={thStyle()}>Categoria</th>
                <th style={thStyle({ textAlign: 'center' })}>Nível</th>
              </tr>
            </thead>
            <tbody>
              {variaveis.map((v, i) => (
                <tr key={v.code} style={{ borderBottom: i < variaveis.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, color: t.colors.navy })}>{v.code}</td>
                  <td style={tdStyle({ fontSize: 13 })}>{v.label}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, color: t.colors.stone })}>{v.unidade}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{v.etapa}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{v.categoria}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <NivelBadge nivel={v.nivel} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '10px 16px', borderTop: `1px solid ${t.colors.bone}`, fontSize: 12, color: t.colors.slate, display: 'flex', justifyContent: 'space-between' }}>
            <div>Mostrando 19 de 85 variáveis</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <BtnGhost>Anterior</BtnGhost>
              <BtnGhost>Próximo</BtnGhost>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <SectionLabel>Variáveis específicas por planta</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <p style={{ fontSize: 13, color: t.colors.stone, lineHeight: 1.55, margin: 0, marginBottom: 12 }}>
              Variáveis fora do catálogo central, registradas como aggregate VariavelEspecificaPlanta.
            </p>
            <EspecificaRow planta="ETA Campo Limpo" code="turb_filtrada_compacta" justif="Trem suplementar com analisador próprio" />
            <EspecificaRow planta="ETA Campo Limpo" code="vaz_bruta_jundiai" justif="Manancial individual fora do catálogo total" />
            <EspecificaRow planta="ETA Campo Limpo" code="vaz_bruta_mae_rosa" justif="Manancial sazonal" last />
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${t.colors.bone}` }}>
              <BtnGhost>Ver todas (7 específicas)</BtnGhost>
            </div>
          </div>
        </div>
        <div>
          <SectionLabel>Validações de integridade</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <ValidacaoRow code="R6" label="pct_missing > 30% em variável crítica" status="ok" detalhe="0 variáveis em violação" />
            <ValidacaoRow code="R7" label="Tag SCADA aponta para catálogo ou específica" status="ok" detalhe="100% das tags mapeadas" />
            <ValidacaoRow code="R8" label="Faixa observada cumpre min ≤ típica ≤ max" status="ok" detalhe="84 de 85 cumprem" />
            <ValidacaoRow code="R9" label="Conflito entre fontes da faixa" status="warn" detalhe="3 alertas informativos" last />
          </div>
        </div>
      </div>
    </div>
  );
}

function NivelBadge({ nivel }) {
  const map = {
    critica: { type: 'rust', label: 'crítica' },
    recomendada: { type: 'ember', label: 'recomendada' },
    opcional: { type: 'navy', label: 'opcional' },
    condicional: { type: 'forest', label: 'condicional' },
    especifica: { type: 'neutral', label: 'específica' },
  };
  const m = map[nivel] || map.opcional;
  return <Badge type={m.type}>{m.label}</Badge>;
}

function FilterChip({ label, count, active, dot }) {
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
      {dot && !active && <span style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: dot }} />}
      {label}
      <span style={{ fontFamily: t.font.mono, fontSize: 10, opacity: 0.7 }}>{count}</span>
    </div>
  );
}

function EspecificaRow({ planta, code, justif, last }) {
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <span style={{ fontSize: 12, fontWeight: 500 }}>{planta}</span>
        <span style={{ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy }}>{code}</span>
      </div>
      <div style={{ fontSize: 11, color: t.colors.slate, fontStyle: 'italic' }}>{justif}</div>
    </div>
  );
}

function ValidacaoRow({ code, label, status, detalhe, last }) {
  const color = status === 'ok' ? t.colors.forest : status === 'warn' ? t.colors.ember : t.colors.rust;
  return (
    <div style={{
      padding: '10px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}>
      <span style={{
        fontFamily: t.font.mono,
        fontSize: 11,
        fontWeight: 500,
        color: t.colors.slate,
        minWidth: 24,
      }}>{code}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, color: t.colors.ink, marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>{detalhe}</div>
      </div>
      <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: color }} />
    </div>
  );
}
