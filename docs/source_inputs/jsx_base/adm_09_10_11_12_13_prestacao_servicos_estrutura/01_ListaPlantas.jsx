import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function ListaPlantas() {
  const plantas = [
    { id: 'eta_clp', nome: 'ETA Campo Limpo', tipo: 'ETA convencional', operadora: 'Sabesp', municipio: 'São Paulo', sistema: 'Cantareira + Paiva Castro (2027)', vazaoNominal: '32.000 L/s', status: 'operacional', conformidade: 99.87 },
    { id: 'eta_guarau', nome: 'ETA Guaraú', tipo: 'ETA convencional', operadora: 'Sabesp', municipio: 'São Paulo', sistema: 'Cantareira', vazaoNominal: '33.000 L/s', status: 'operacional', conformidade: 99.92 },
    { id: 'eta_taiacupeba', nome: 'ETA Taiaçupeba', tipo: 'ETA convencional', operadora: 'Sabesp', municipio: 'Suzano', sistema: 'Alto Tietê', vazaoNominal: '14.500 L/s', status: 'operacional', conformidade: 99.74 },
    { id: 'eta_abv', nome: 'ETA ABV', tipo: 'ETA convencional', operadora: 'Sabesp', municipio: 'São Paulo', sistema: 'Guarapiranga + Cotia', vazaoNominal: '14.800 L/s', status: 'operacional', conformidade: 99.81 },
    { id: 'eta_rio_claro', nome: 'ETA Rio Claro', tipo: 'ETA convencional', operadora: 'Sabesp', municipio: 'Salesópolis', sistema: 'Rio Claro', vazaoNominal: '4.000 L/s', status: 'operacional', conformidade: 99.68 },
    { id: 'eta_rio_grande', nome: 'ETA Rio Grande', tipo: 'ETA convencional', operadora: 'Sabesp', municipio: 'Ribeirão Pires', sistema: 'Rio Grande', vazaoNominal: '5.500 L/s', status: 'operacional', conformidade: 99.78 },
    { id: 'eta_morro_grande', nome: 'ETA Morro Grande', tipo: 'ETA convencional', operadora: 'Sabesp', municipio: 'Cotia', sistema: 'Alto Cotia', vazaoNominal: '1.300 L/s', status: 'operacional', conformidade: 99.82 },
    { id: 'eta_camp_norte', nome: 'ETA Capivari', tipo: 'ETA convencional', operadora: 'SAAE Campinas', municipio: 'Campinas', sistema: 'Rio Capivari', vazaoNominal: '2.800 L/s', status: 'operacional', conformidade: 99.42 },
    { id: 'eta_camp_atibaia', nome: 'ETA Atibaia', tipo: 'ETA convencional', operadora: 'SAAE Campinas', municipio: 'Campinas', sistema: 'Rio Atibaia', vazaoNominal: '3.600 L/s', status: 'operacional', conformidade: 99.51 },
    { id: 'eta_natal_jiquid', nome: 'ETA Jiquí', tipo: 'ETA convencional', operadora: 'CAERN', municipio: 'Natal', sistema: 'Aquífero Dunas-Barreiras', vazaoNominal: '1.200 L/s', status: 'operacional', conformidade: 98.84 },
  ];

  const previstas = [
    { id: 'eta_clp_pcastro_mod', nome: 'Mistura Paiva Castro · ETA Campo Limpo', desc: 'Não é planta nova: amplia escopo da ETA Campo Limpo para receber mistura Cantareira + Paiva Castro', previstoEm: 'Jan/2027', status: 'previsto' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Plantas', 'Lista de plantas']}
        title="Plantas"
        lead="Cadastro de plantas operacionais do domínio Águas. Inclui ETAs e EEABs com vínculos a operadora, sistema produtor, municípios atendidos, outorga e estado de conformidade."
        actions={<>
          <BtnSecondary>Importar de cadastro ANA</BtnSecondary>
          <BtnPrimary>Nova planta</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>ETAs e EEABs · ETEs vivem em Admin Efluentes</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Plantas Águas" value="47" hint="todas operacionais" />
        <Metric label="Capacidade total" value="142.6k L/s" hint="vazão nominal somada" />
        <Metric label="Conformidade média" value="99.71%" delta="meta ≥ 99.5%" deltaPositive />
        <Metric label="Plantas previstas" value="1" hint="ampliação Campo Limpo" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de plantas" active />
        <SubTab label="Trens de tratamento" />
        <SubTab label="Vínculos institucionais" />
        <SubTab label="Outorga & captação" />
        <SubTab label="Conformidade snapshot" attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="10 das 47 mostradas · ordenado por capacidade">Plantas operacionais</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <div style={{ padding: '10px 16px', borderBottom: `1px solid ${t.colors.bone}`, backgroundColor: t.colors.paper, display: 'flex', gap: 8 }}>
            <Field placeholder="Buscar por nome, operadora ou sistema..." mono />
            <BtnSecondary>Filtros</BtnSecondary>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Planta</th>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle()}>Operadora</th>
                <th style={thStyle()}>Município</th>
                <th style={thStyle()}>Sistema produtor</th>
                <th style={thStyle({ textAlign: 'right' })}>Vazão nominal</th>
                <th style={thStyle({ textAlign: 'right' })}>Conformidade</th>
              </tr>
            </thead>
            <tbody>
              {plantas.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i < plantas.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{p.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{p.nome}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{p.tipo}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{p.operadora}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{p.municipio}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{p.sistema}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{p.vazaoNominal}</td>
                  <td style={tdStyle({
                    textAlign: 'right',
                    fontFamily: t.font.mono,
                    fontSize: 12,
                    fontWeight: 500,
                    color: p.conformidade >= 99.5 ? t.colors.forest : p.conformidade >= 99.0 ? t.colors.ember : t.colors.rust,
                  })}>{p.conformidade}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '10px 16px', borderTop: `1px solid ${t.colors.bone}`, fontSize: 11, color: t.colors.slate, display: 'flex', justifyContent: 'space-between' }}>
            <div>Mostrando 10 de 47 plantas Águas</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <BtnGhost>Anterior</BtnGhost>
              <BtnGhost>Próximo</BtnGhost>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="ampliação de planta existente">Plantas em status previsto</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          {previstas.map((pv, i) => (
            <div key={pv.id} style={{
              padding: '14px 20px',
              borderBottom: i < previstas.length - 1 ? `1px solid ${t.colors.bone}` : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate }}>{pv.id}</span>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{pv.nome}</span>
                </div>
                <Pill type="navy">previsto · {pv.previstoEm}</Pill>
              </div>
              <div style={{ fontSize: 12, color: t.colors.stone, fontStyle: 'italic' }}>{pv.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <CalloutBlock tone="info" title="Sub-estrutura TremTratamento">
        Cada planta pode ter múltiplos trens de tratamento. ETA Campo Limpo opera com trem principal (ETA convencional) e trem compacta auxiliar com escopo distinto. Detalhamento na sub-página "Trens de tratamento".
      </CalloutBlock>
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
