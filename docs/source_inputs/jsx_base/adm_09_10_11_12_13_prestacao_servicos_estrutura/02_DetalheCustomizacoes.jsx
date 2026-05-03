import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function DetalheCustomizacoes() {
  const etapas = [
    { etapa: 'captacao', papelISA: 'Process Cell', obrigatoria: true, params: 'turb_bruta, pH_bruta, vaz_bruta_total' },
    { etapa: 'pre_oxidacao', papelISA: 'Unit', obrigatoria: false, params: 'dos_cloro_pre_real' },
    { etapa: 'mistura_rapida_coagulacao', papelISA: 'Unit', obrigatoria: true, params: 'dos_coagulante_real, dos_alcalinizante_real, pH_pos_coagulacao' },
    { etapa: 'floculacao', papelISA: 'Unit', obrigatoria: true, params: 'tempo_residencia, gradiente_velocidade' },
    { etapa: 'decantacao', papelISA: 'Unit', obrigatoria: true, params: 'turb_decantada, taxa_aplicacao_superficial' },
    { etapa: 'filtracao', papelISA: 'Unit', obrigatoria: true, params: 'turb_filtrada_filtro_n, perda_carga_filtro_n, tempo_carreira_filtro_n' },
    { etapa: 'correcao_pH_pos', papelISA: 'Unit', obrigatoria: false, params: 'dos_alcalinizante_pos' },
    { etapa: 'fluoretacao', papelISA: 'Unit', obrigatoria: true, params: 'dos_fluor_real, fluor_final' },
    { etapa: 'desinfeccao', papelISA: 'Unit', obrigatoria: true, params: 'dos_cloro_pos_real, cloro_final, tempo_contato' },
  ];

  const customizacoes = [
    { planta: 'ETA Campo Limpo', tipo: 'extensão', desc: 'Adiciona variável específica turb_filtrada_compacta para trem suplementar', justif: 'Trem auxiliar com analisador próprio fora do catálogo padrão' },
    { planta: 'ETA Campo Limpo', tipo: 'extensão', desc: 'Adiciona variável vaz_bruta_jundiai para manancial individual', justif: 'Manancial fora do total agregado · acompanhamento separado' },
    { planta: 'ETA Guaraú', tipo: 'pacote', desc: 'Aplica pacote regulatório PR-SP-PRECATARI-v1.2', justif: 'Adesão voluntária a tarifa diferenciada em Fonte Cantareira' },
    { planta: 'ETA Atibaia', tipo: 'extensão', desc: 'Adiciona variável vaz_atibaia_paraibuna para captação suplementar', justif: 'Acordo de operação cooperada com USP Limeira' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Templates regulatórios', 'Detalhe & customizações']}
        title="Detalhe & customizações"
        lead="Estrutura formal do template ETA convencional v3.2 com etapas, parâmetros típicos, papel ISA-95, normas aplicáveis. Exibe customizações por planta sem fork do template-base."
        actions={<>
          <BtnSecondary>Comparar versões</BtnSecondary>
          <BtnPrimary>Customizar para planta</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Detalhe técnico do template ETA convencional v3.2</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Template ativo" value="ETA conv. v3.2" hint="atualizado 15 mar 2026" />
        <Metric label="Etapas no template" value="9" hint="6 obrigatórias · 3 opcionais" />
        <Metric label="Variáveis vinculadas" value="62" hint="das 85 do catálogo" />
        <Metric label="Customizações ativas" value="4" hint="sem fork do template" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Templates Águas" count={3} />
        <SubTab label="Detalhe & customizações" active />
        <SubTab label="Histórico de versões" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="9 etapas declaradas no template-base">Estrutura do template ETA convencional v3.2</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Ordem</th>
                <th style={thStyle()}>Etapa canônica</th>
                <th style={thStyle()}>Papel ISA-95</th>
                <th style={thStyle({ textAlign: 'center' })}>Obrigatória</th>
                <th style={thStyle()}>Parâmetros típicos vinculados</th>
              </tr>
            </thead>
            <tbody>
              {etapas.map((e, i) => (
                <tr key={e.etapa} style={{ borderBottom: i < etapas.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, fontWeight: 500, color: t.colors.slate })}>{String(i + 1).padStart(2, '0')}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 12, color: t.colors.navy })}>{e.etapa}</td>
                  <td style={tdStyle({ fontSize: 11, fontFamily: t.font.mono, color: t.colors.stone })}>{e.papelISA}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {e.obrigatoria ? <Badge type="rust">obrigatória</Badge> : <Badge type="navy">opcional</Badge>}
                  </td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 10, color: t.colors.stone })}>{e.params}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        <div>
          <SectionLabel>Normas aplicáveis ao template</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <NormaRow norma="Portaria GM/MS 888/2021" desc="Procedimentos de controle e vigilância da qualidade da água" obrig="sim" />
            <NormaRow norma="Lei 6.050/1974" desc="Fluoretação obrigatória da água" obrig="sim" />
            <NormaRow norma="ARSESP DEL 1.413/2024" desc="Tarifa social regional URAE-1" obrig="sim" />
            <NormaRow norma="ABNT NBR 12216/1992" desc="Projeto de estação de tratamento de água" obrig="referência" />
            <NormaRow norma="ABNT NBR 12244/2006" desc="Construção de poço para captação subterrânea" obrig="condicional" last />
          </div>
        </div>

        <div>
          <SectionLabel>Customizações ativas</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            {customizacoes.map((c, i) => (
              <div key={i} style={{
                padding: '14px 16px',
                borderBottom: i < customizacoes.length - 1 ? `1px solid ${t.colors.bone}` : 'none',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 500 }}>{c.planta}</span>
                  {c.tipo === 'extensão' && <Badge type="navy">extensão</Badge>}
                  {c.tipo === 'pacote' && <Badge type="forest">pacote</Badge>}
                </div>
                <div style={{ fontSize: 12, color: t.colors.ink, marginBottom: 4 }}>{c.desc}</div>
                <div style={{ fontSize: 11, color: t.colors.slate, fontStyle: 'italic' }}>{c.justif}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CalloutBlock tone="info" title="Customização sem fork">
        Plantas podem estender o template-base com variáveis específicas (aggregate VariavelEspecificaPlanta) ou aplicar pacotes regulatórios sem necessidade de fork. O template-base permanece imutável; customizações vivem em camada de extensão referenciada pelo template+versão.
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

function NormaRow({ norma, desc, obrig, last }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 500, fontFamily: t.font.mono, color: t.colors.navy }}>{norma}</span>
        {obrig === 'sim' && <Badge type="rust">obrigatória</Badge>}
        {obrig === 'referência' && <Badge type="navy">referência</Badge>}
        {obrig === 'condicional' && <Badge type="ember">condicional</Badge>}
      </div>
      <div style={{ fontSize: 11, color: t.colors.stone }}>{desc}</div>
    </div>
  );
}
