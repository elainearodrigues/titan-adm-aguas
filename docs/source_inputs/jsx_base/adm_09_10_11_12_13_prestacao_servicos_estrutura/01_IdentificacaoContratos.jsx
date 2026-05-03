import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function IdentificacaoContratos() {
  const operadoras = [
    { id: 'op_001', nome: 'Sabesp', tipo: 'Estatal privatizada', cnpj: '43.776.517/0001-80', plantas: 47, urae: 'URAE-1', contratoAditivos: '12 aditivos · NR 8/2024', vigencia: '2024-2054', status: 'ativa' },
    { id: 'op_002', nome: 'SAAE Campinas', tipo: 'Autarquia municipal', cnpj: '46.033.380/0001-93', plantas: 12, urae: 'URAE-2', contratoAditivos: '4 aditivos', vigencia: '2018-2048', status: 'ativa' },
    { id: 'op_003', nome: 'Águas Guariroba', tipo: 'Concessionária privada', cnpj: '08.667.110/0001-95', plantas: 8, urae: '—', contratoAditivos: '2 aditivos', vigencia: '2017-2047', status: 'ativa' },
    { id: 'op_004', nome: 'BRK Ambiental', tipo: 'Concessionária privada', cnpj: '02.752.347/0001-49', plantas: 23, urae: '—', contratoAditivos: '7 aditivos', vigencia: '2020-2050', status: 'ativa' },
    { id: 'op_005', nome: 'CAERN', tipo: 'Estatal estadual', cnpj: '08.334.385/0001-35', plantas: 31, urae: '—', contratoAditivos: 'sem aditivos', vigencia: '1969-permanente', status: 'ativa' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Operadoras', 'Identificação & contratos']}
        title="Operadoras"
        lead="Cadastro de prestadores de serviço público de saneamento. Identificação jurídica, contratos vigentes, aditivos conforme NR 8/2024 da ANA, vigência e bloco regional."
        actions={<>
          <BtnSecondary>Exportar cadastro</BtnSecondary>
          <BtnPrimary>Nova operadora</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Operadoras ativas" value="5" hint="2 em URAE · 3 fora" />
        <Metric label="Plantas no escopo" value="121" hint="todos os domínios" />
        <Metric label="Aditivos vigentes" value="25" hint="conforme NR 8/2024" />
        <Metric label="Próx. renovação" value="2047" hint="Águas Guariroba" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Identificação & contratos" active />
        <SubTab label="Capacidade econ.-financeira" />
        <SubTab label="DPO & Privacidade" />
        <SubTab label="Indicadores contratuais & SLA" attention count={3} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="5 prestadores · todos status ativa">Operadoras cadastradas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Operadora</th>
                <th style={thStyle()}>Tipo jurídico</th>
                <th style={thStyle()}>CNPJ</th>
                <th style={thStyle({ textAlign: 'right' })}>Plantas</th>
                <th style={thStyle()}>URAE</th>
                <th style={thStyle()}>Contrato</th>
                <th style={thStyle()}>Vigência</th>
              </tr>
            </thead>
            <tbody>
              {operadoras.map((o, i) => (
                <tr key={o.id} style={{ borderBottom: i < operadoras.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{o.id}</td>
                  <td style={tdStyle({ fontWeight: 500 })}>{o.nome}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{o.tipo}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{o.cnpj}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{o.plantas}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{o.urae}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{o.contratoAditivos}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{o.vigencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="seleção: Sabesp">Detalhe da operadora</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <CardColumn title="Identificação">
              <CardRow label="Razão social" value="Companhia de Saneamento Básico do Estado de São Paulo" />
              <CardRow label="Nome fantasia" value="Sabesp" />
              <CardRow label="CNPJ" value="43.776.517/0001-80" mono />
              <CardRow label="Inscrição estadual" value="103.083.460.114" mono />
              <CardRow label="Tipo jurídico" value="Sociedade de economia mista privatizada" />
            </CardColumn>
            <CardColumn title="Direção">
              <CardRow label="CEO" value="Carlos Eduardo Leal" />
              <CardRow label="CFO" value="Catarina Lemos Pedroso" />
              <CardRow label="Conselho regulatório" value="ARSESP" />
              <CardRow label="DPO" value="Juliana Camargo" />
              <CardRow label="Sede" value="Rua Costa Carvalho 300, São Paulo SP" />
            </CardColumn>
            <CardColumn title="Contrato regulatório" last>
              <CardRow label="Tipo de contrato" value="Concessão regionalizada URAE-1" />
              <CardRow label="Início vigência" value="03 jul 2024" mono />
              <CardRow label="Fim vigência" value="03 jul 2054" mono />
              <CardRow label="Aditivos NR 8/2024" value="12 aditivos vigentes" />
              <CardRow label="Universalização" value="meta antecipada para 2029" />
            </CardColumn>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="histórico contratual">Aditivos vigentes · Sabesp</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Nº</th>
                <th style={thStyle()}>Objeto</th>
                <th style={thStyle()}>Data</th>
                <th style={thStyle()}>Base normativa</th>
              </tr>
            </thead>
            <tbody>
              <AditivoRow num="A-2024-001" objeto="Antecipação de meta de universalização para 2029" data="03 jul 2024" base="LC 1.413/2024" />
              <AditivoRow num="A-2024-002" objeto="Inclusão de 12 municípios da URAE-1" data="15 ago 2024" base="NR 8/2024 ANA" />
              <AditivoRow num="A-2024-003" objeto="Revisão de tarifa social conforme Lei 14.898/2024" data="01 out 2024" base="Lei 14.898/2024" />
              <AditivoRow num="A-2025-001" objeto="Adesão ao Sistema Cantareira-Paiva Castro" data="15 jan 2025" base="DAEE-SP outorga" />
              <AditivoRow num="A-2025-002" objeto="Compromisso de transferência integral à plataforma TITAN" data="20 mar 2025" base="LC 1.413/2024 art. 47" last />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, count, active, attention }) {
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
          backgroundColor: attention ? t.colors.rustMist : t.colors.bone,
          color: attention ? t.colors.rust : t.colors.stone,
          borderRadius: 8,
          fontFamily: t.font.mono,
        }}>{count}</span>
      )}
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

function CardRow({ label, value, mono }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 10, color: t.colors.slate, marginBottom: 2 }}>{label}</div>
      <div style={{
        fontSize: 12,
        color: t.colors.ink,
        lineHeight: 1.4,
        fontFamily: mono ? t.font.mono : t.font.sans,
      }}>{value}</div>
    </div>
  );
}

function AditivoRow({ num, objeto, data, base, last }) {
  return (
    <tr style={{ borderBottom: last ? 'none' : `1px solid ${t.colors.bone}` }}>
      <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{num}</td>
      <td style={tdStyle({ fontSize: 12 })}>{objeto}</td>
      <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{data}</td>
      <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' })}>{base}</td>
    </tr>
  );
}
