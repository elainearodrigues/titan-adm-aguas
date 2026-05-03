import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function ListaMunicipios() {
  const municipios = [
    { ibge: '3550308', nome: 'São Paulo', uf: 'SP', urae: 'URAE-1', operadora: 'Sabesp', populacao: '11.451.245', pmsb: 'vigente', tarifaSocial: 'sim', plantas: 8 },
    { ibge: '3548708', nome: 'Santo André', uf: 'SP', urae: 'URAE-1', operadora: 'Sabesp', populacao: '720.516', pmsb: 'vigente', tarifaSocial: 'sim', plantas: 2 },
    { ibge: '3506003', nome: 'Barueri', uf: 'SP', urae: 'URAE-1', operadora: 'Sabesp', populacao: '316.741', pmsb: 'vigente', tarifaSocial: 'sim', plantas: 1 },
    { ibge: '3509502', nome: 'Campinas', uf: 'SP', urae: 'URAE-2', operadora: 'SAAE Campinas', populacao: '1.178.998', pmsb: 'vigente', tarifaSocial: 'sim', plantas: 4 },
    { ibge: '3548906', nome: 'Santos', uf: 'SP', urae: 'URAE-1', operadora: 'Sabesp', populacao: '433.311', pmsb: 'em revisão', tarifaSocial: 'sim', plantas: 1 },
    { ibge: '3552205', nome: 'Sorocaba', uf: 'SP', urae: 'URAE-2', operadora: 'Sabesp', populacao: '714.589', pmsb: 'vigente', tarifaSocial: 'sim', plantas: 2 },
    { ibge: '5002704', nome: 'Campo Grande', uf: 'MS', urae: '—', operadora: 'Águas Guariroba', populacao: '906.092', pmsb: 'vigente', tarifaSocial: 'sim', plantas: 3 },
    { ibge: '2408102', nome: 'Natal', uf: 'RN', urae: '—', operadora: 'CAERN', populacao: '751.300', pmsb: 'vencido', tarifaSocial: 'parcial', plantas: 4 },
    { ibge: '5208707', nome: 'Goiânia', uf: 'GO', urae: '—', operadora: 'BRK Ambiental', populacao: '1.555.626', pmsb: 'vigente', tarifaSocial: 'sim', plantas: 5 },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Municípios', 'Lista de municípios']}
        title="Municípios"
        lead="Cadastro de municípios titulares dos serviços conforme Lei 11.445/2007 art. 8º. Identificação por código IBGE, vinculação à URAE, operadora prestadora e perfil socioeconômico."
        actions={<>
          <BtnSecondary>Importar de IBGE</BtnSecondary>
          <BtnPrimary>Novo município</BtnPrimary>
        </>}
      />

      <CalloutBlock tone="info" title="Lei 11.445/2007 art. 8º · titularidade municipal">
        Os titulares dos serviços públicos de saneamento básico são os Municípios e o Distrito Federal, no caso de interesse local. Cadastro transversal entre Admin Águas e Admin Efluentes; configurações específicas por domínio (PMSB, fundo municipal, tarifa social) podem divergir.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Municípios cadastrados" value="9" hint="todos os domínios" />
        <Metric label="Em URAE" value="6" hint="3 URAE-1 · 3 URAE-2" />
        <Metric label="PMSB vigente" value="7/9" hint="2 com pendência" />
        <Metric label="Tarifa social ativa" value="8/9" hint="cobertura 89%" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de municípios" active />
        <SubTab label="PMSB & adesão URAE" />
        <SubTab label="Tarifa Social & Fundo Municipal" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="9 cadastrados · ordenados por população">Municípios cadastrados</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <div style={{ padding: '10px 16px', borderBottom: `1px solid ${t.colors.bone}`, backgroundColor: t.colors.paper, display: 'flex', gap: 8 }}>
            <Field placeholder="Buscar por nome, IBGE ou UF..." mono />
            <BtnSecondary>Filtros</BtnSecondary>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Cód. IBGE</th>
                <th style={thStyle()}>Município</th>
                <th style={thStyle({ textAlign: 'center' })}>UF</th>
                <th style={thStyle()}>URAE</th>
                <th style={thStyle()}>Operadora</th>
                <th style={thStyle({ textAlign: 'right' })}>População</th>
                <th style={thStyle({ textAlign: 'center' })}>PMSB</th>
                <th style={thStyle({ textAlign: 'center' })}>Tarifa social</th>
                <th style={thStyle({ textAlign: 'right' })}>Plantas</th>
              </tr>
            </thead>
            <tbody>
              {municipios.map((m, i) => (
                <tr key={m.ibge} style={{ borderBottom: i < municipios.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{m.ibge}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{m.nome}</td>
                  <td style={tdStyle({ textAlign: 'center', fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{m.uf}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: m.urae === '—' ? t.colors.mist : t.colors.navy })}>{m.urae}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{m.operadora}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{m.populacao}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {m.pmsb === 'vigente' && <Badge type="forest">vigente</Badge>}
                    {m.pmsb === 'em revisão' && <Badge type="ember">em revisão</Badge>}
                    {m.pmsb === 'vencido' && <Badge type="rust">vencido</Badge>}
                  </td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {m.tarifaSocial === 'sim' && <Badge type="navy">sim</Badge>}
                    {m.tarifaSocial === 'parcial' && <Badge type="ember">parcial</Badge>}
                  </td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{m.plantas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <SectionLabel>Distribuição por UF</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <UFRow uf="SP" municipios={6} populacao="14.815k" plantas={18} />
            <UFRow uf="MS" municipios={1} populacao="906k" plantas={3} />
            <UFRow uf="GO" municipios={1} populacao="1.556k" plantas={5} />
            <UFRow uf="RN" municipios={1} populacao="751k" plantas={4} last />
          </div>
        </div>
        <div>
          <SectionLabel>Adesão a URAE</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <UraeRow urae="URAE-1" lei="LC 1.413/2024" municipios={3} status="ativa · sob Sabesp" />
            <UraeRow urae="URAE-2" lei="LC 1.413/2024" municipios={3} status="ativa · sob Sabesp + SAAE" />
            <UraeRow urae="Fora de URAE" lei="—" municipios={3} status="prestação direta ou concessão" last />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubTab({ label, active }) {
  return (
    <div style={{
      padding: '12px 18px',
      fontSize: 13,
      fontWeight: active ? 500 : 400,
      color: active ? t.colors.ink : t.colors.stone,
      borderBottom: active ? `2px solid ${t.colors.navy}` : '2px solid transparent',
      cursor: 'pointer',
      marginBottom: -1,
    }}>{label}</div>
  );
}

function UFRow({ uf, municipios, populacao, plantas, last }) {
  return (
    <div style={{
      padding: '12px 16px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'grid',
      gridTemplateColumns: '60px 1fr 1fr 1fr',
      gap: 12,
      alignItems: 'center',
    }}>
      <span style={{ fontFamily: t.font.mono, fontSize: 13, fontWeight: 500, color: t.colors.navy }}>{uf}</span>
      <span style={{ fontSize: 12, color: t.colors.stone }}>{municipios} {municipios === 1 ? 'município' : 'municípios'}</span>
      <span style={{ fontSize: 12, fontFamily: t.font.mono, color: t.colors.stone }}>pop {populacao}</span>
      <span style={{ fontSize: 12, fontFamily: t.font.mono, color: t.colors.slate, textAlign: 'right' }}>{plantas} plantas</span>
    </div>
  );
}

function UraeRow({ urae, lei, municipios, status, last }) {
  return (
    <div style={{
      padding: '12px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 13, fontWeight: 500, fontFamily: t.font.mono, color: t.colors.navy }}>{urae}</span>
        <span style={{ fontSize: 11, fontFamily: t.font.mono, color: t.colors.slate }}>{municipios} mun.</span>
      </div>
      <div style={{ fontSize: 11, color: t.colors.stone, marginBottom: 2 }}>{status}</div>
      <div style={{ fontSize: 10, color: t.colors.slate, fontFamily: t.font.mono }}>{lei}</div>
    </div>
  );
}
