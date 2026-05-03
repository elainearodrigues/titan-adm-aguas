import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function TrensTratamento() {
  const trens = [
    { id: 'trem_clp_principal', planta: 'ETA Campo Limpo', nome: 'Trem principal', template: 'eta_convencional', vazao: '28.000 L/s', etapasAtivas: 9, status: 'operacional' },
    { id: 'trem_clp_compacta', planta: 'ETA Campo Limpo', nome: 'Trem compacta auxiliar', template: 'eta_compacta', vazao: '4.000 L/s', etapasAtivas: 6, status: 'operacional' },
    { id: 'trem_guarau_p', planta: 'ETA Guaraú', nome: 'Trem principal', template: 'eta_convencional', vazao: '33.000 L/s', etapasAtivas: 10, status: 'operacional' },
    { id: 'trem_taiacup_p', planta: 'ETA Taiaçupeba', nome: 'Trem principal', template: 'eta_convencional', vazao: '14.500 L/s', etapasAtivas: 9, status: 'operacional' },
    { id: 'trem_abv_p', planta: 'ETA ABV', nome: 'Trem principal', template: 'eta_convencional', vazao: '12.000 L/s', etapasAtivas: 9, status: 'operacional' },
    { id: 'trem_abv_aux', planta: 'ETA ABV', nome: 'Trem auxiliar Cotia', template: 'eta_filtracao_direta', vazao: '2.800 L/s', etapasAtivas: 7, status: 'operacional' },
    { id: 'trem_rcla_p', planta: 'ETA Rio Claro', nome: 'Trem principal', template: 'eta_convencional', vazao: '4.000 L/s', etapasAtivas: 8, status: 'operacional' },
    { id: 'trem_natal_p', planta: 'ETA Jiquí', nome: 'Trem principal', template: 'eta_dupla_filtracao', vazao: '1.200 L/s', etapasAtivas: 8, status: 'operacional' },
  ];

  const etapasCLPPrincipal = [
    { etapa: 'captacao', ativa: true },
    { etapa: 'pre_oxidacao', ativa: true },
    { etapa: 'mistura_rapida_coagulacao', ativa: true },
    { etapa: 'floculacao', ativa: true },
    { etapa: 'decantacao', ativa: true },
    { etapa: 'filtracao', ativa: true },
    { etapa: 'correcao_pH_pos', ativa: true },
    { etapa: 'fluoretacao', ativa: true },
    { etapa: 'desinfeccao', ativa: true },
    { etapa: 'reservacao', ativa: false },
    { etapa: 'recalque_distribuicao', ativa: false },
    { etapa: 'tratamento_lodo', ativa: false },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Plantas', 'Trens de tratamento']}
        title="Trens de tratamento"
        lead="Sub-estrutura formal de uma planta. Cada trem realiza uma sequência específica de etapas a partir de um template. Atende ao requisito R12 (etapas ativas ⊆ catalogadas)."
        actions={<>
          <BtnSecondary>Filtrar por planta</BtnSecondary>
          <BtnPrimary>Novo trem</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Trens são derivados de templates Águas (ver item #13)</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Trens declarados" value="73" hint="média 1.6 por planta" />
        <Metric label="Plantas multi-trem" value="14" hint="ETA Campo Limpo · ABV · etc" />
        <Metric label="Templates usados" value="3" hint="convencional · filtração direta · dupla" />
        <Metric label="Conformidade R12" value="100%" delta="todas etapas catalogadas" deltaPositive />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de plantas" />
        <SubTab label="Trens de tratamento" active />
        <SubTab label="Vínculos institucionais" />
        <SubTab label="Outorga & captação" />
        <SubTab label="Conformidade snapshot" attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="8 de 73 mostrados">Trens cadastrados</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle()}>Trem</th>
                <th style={thStyle()}>Template aplicado</th>
                <th style={thStyle({ textAlign: 'right' })}>Vazão</th>
                <th style={thStyle({ textAlign: 'right' })}>Etapas ativas</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {trens.map((tr, i) => (
                <tr key={tr.id} style={{ borderBottom: i < trens.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{tr.id}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{tr.planta}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{tr.nome}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{tr.template}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{tr.vazao}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{tr.etapasAtivas}/12</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <Badge type="forest">{tr.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel>Detalhe do trem · ETA Campo Limpo · Trem principal</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate, marginBottom: 4 }}>trem_clp_principal · template eta_convencional</div>
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>Trem principal · ETA Campo Limpo</div>
              <div style={{ fontSize: 12, color: t.colors.stone }}>Vazão nominal 28.000 L/s · 9 etapas ativas das 12 catalogadas</div>
            </div>
            <BtnGhost>Editar etapas ativas</BtnGhost>
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Sequência ativa</div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
              {etapasCLPPrincipal.filter(e => e.ativa).map((e, idx, arr) => (
                <React.Fragment key={e.etapa}>
                  <span style={{
                    padding: '6px 12px',
                    backgroundColor: t.colors.navyMist,
                    color: t.colors.navy,
                    fontSize: 11,
                    fontWeight: 500,
                    fontFamily: t.font.mono,
                    border: `1px solid ${t.colors.navy}`,
                    borderRadius: 2,
                  }}>{e.etapa}</span>
                  {idx < arr.length - 1 && <span style={{ color: t.colors.mist }}>→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Etapas catalogadas mas inativas neste trem</div>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
              {etapasCLPPrincipal.filter(e => !e.ativa).map(e => (
                <span key={e.etapa} style={{
                  padding: '6px 12px',
                  backgroundColor: t.colors.bone,
                  color: t.colors.slate,
                  fontSize: 11,
                  fontWeight: 400,
                  fontFamily: t.font.mono,
                  border: `1px solid ${t.colors.mist}`,
                  borderRadius: 2,
                }}>{e.etapa}</span>
              ))}
            </div>
            <div style={{ marginTop: 12, fontSize: 11, color: t.colors.slate, fontStyle: 'italic' }}>
              Reservação, recalque e tratamento de lodo da ETA Campo Limpo são tratados como aggregates separados ou cadastrados em planta vizinha. R12 satisfeita.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, active, attention, count }) {
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
          backgroundColor: attention ? t.colors.emberMist : t.colors.bone,
          color: attention ? t.colors.ember : t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
    </div>
  );
}
