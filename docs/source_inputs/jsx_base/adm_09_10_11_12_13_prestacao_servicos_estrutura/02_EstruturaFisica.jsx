import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, thStyle, tdStyle, CalloutBlock, DomainPill, CrossAdminLink,
} from './tokens.js';

export default function EstruturaFisica() {
  const eeabs = [
    { id: 'eeab_st_amaro', nome: 'EEAB Santo Amaro', sistema: 'Cantareira', vazao: '12.000 L/s', altura: '52m', bombas: 4, status: 'operacional' },
    { id: 'eeab_pcastro', nome: 'EEAB Paiva Castro', sistema: 'Paiva Castro', vazao: '~2.000 L/s', altura: '38m', bombas: 3, status: 'em comissionamento' },
    { id: 'eeab_taiacupeba', nome: 'EEAB Taiaçupeba', sistema: 'Alto Tietê', vazao: '8.500 L/s', altura: '47m', bombas: 4, status: 'operacional' },
    { id: 'eeab_morro_grande', nome: 'EEAB Morro Grande', sistema: 'Alto Cotia', vazao: '1.300 L/s', altura: '64m', bombas: 2, status: 'operacional' },
    { id: 'eeab_guarapiranga', nome: 'EEAB Guarapiranga', sistema: 'Guarapiranga', vazao: '14.800 L/s', altura: '58m', bombas: 5, status: 'operacional' },
  ];

  const adutoras = [
    { id: 'adu_cant_guarau', nome: 'Adutora Cantareira → Guaraú', extensao: '48 km', diametro: 'DN 2.400', material: 'aço', vazao: '33.000 L/s', critica: 'sim' },
    { id: 'adu_pcastro_clp', nome: 'Adutora Paiva Castro → Campo Limpo', extensao: '12 km', diametro: 'DN 1.200', material: 'aço · em comissionamento', vazao: '~2.000 L/s', critica: 'previsto' },
    { id: 'adu_taiacup_abv', nome: 'Adutora Taiaçupeba → ABV', extensao: '32 km', diametro: 'DN 2.000', material: 'aço', vazao: '14.500 L/s', critica: 'sim' },
    { id: 'adu_guara_abv', nome: 'Adutora Guarapiranga → ABV', extensao: '14 km', diametro: 'DN 1.800', material: 'aço', vazao: '14.800 L/s', critica: 'sim' },
    { id: 'adu_morro_abv', nome: 'Adutora Morro Grande → ABV', extensao: '24 km', diametro: 'DN 800', material: 'concreto · aço', vazao: '1.300 L/s', critica: 'não' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Estrutura de prestação', 'Sistemas produtores', 'Estrutura física']}
        title="Estrutura física"
        lead="Estações elevatórias de água bruta (EEAB), adutoras e travessias. Componentes hidráulicos que conectam manancial → ETA. Cadastro georreferenciado quando GIS habilitado."
        actions={<>
          <BtnSecondary>Diagrama hidráulico</BtnSecondary>
          <BtnPrimary>Nova estrutura</BtnPrimary>
        </>}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${t.colors.bone}` }}>
        <DomainPill domain="aguas" />
        <span style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>·</span>
        <span style={{ fontSize: 12, color: t.colors.stone }}>Conteúdo específico do domínio Águas</span>
        <div style={{ marginLeft: 'auto' }}>
          <CrossAdminLink to="efluentes" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="EEABs operacionais" value="4/5" hint="Paiva Castro em comissionamento" />
        <Metric label="Adutoras críticas" value="3" hint="capacidade > 14.000 L/s" />
        <Metric label="Extensão total" value="130 km" hint="adutoras de água bruta" />
        <Metric label="Bombas instaladas" value="18" hint="distribuídas nas EEABs" />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="Lista de sistemas" />
        <SubTab label="Estrutura física" active />
        <SubTab label="Status & comissionamento" attention count={1} />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="estações elevatórias de água bruta">EEABs cadastradas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>EEAB</th>
                <th style={thStyle()}>Sistema</th>
                <th style={thStyle({ textAlign: 'right' })}>Vazão nominal</th>
                <th style={thStyle({ textAlign: 'right' })}>Altura man.</th>
                <th style={thStyle({ textAlign: 'right' })}>Bombas</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {eeabs.map((e, i) => (
                <tr key={e.id} style={{ borderBottom: i < eeabs.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{e.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 13 })}>{e.nome}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{e.sistema}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{e.vazao}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{e.altura}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{e.bombas}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {e.status === 'operacional' ? <Badge type="forest">operacional</Badge> : <Badge type="ember">comissionamento</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="condutos forçados de água bruta">Adutoras</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Adutora</th>
                <th style={thStyle({ textAlign: 'right' })}>Extensão</th>
                <th style={thStyle({ textAlign: 'right' })}>Diâmetro</th>
                <th style={thStyle()}>Material</th>
                <th style={thStyle({ textAlign: 'right' })}>Vazão típica</th>
                <th style={thStyle({ textAlign: 'center' })}>Crítica</th>
              </tr>
            </thead>
            <tbody>
              {adutoras.map((a, i) => (
                <tr key={a.id} style={{ borderBottom: i < adutoras.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{a.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{a.nome}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{a.extensao}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{a.diametro}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone })}>{a.material}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{a.vazao}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {a.critica === 'sim' && <Badge type="rust">crítica</Badge>}
                    {a.critica === 'previsto' && <Badge type="navy">previsto</Badge>}
                    {a.critica === 'não' && <span style={{ fontSize: 11, color: t.colors.mist }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CalloutBlock tone="info" title="GIS & estrutura espacial · Fase 2">
        Cadastro georreferenciado completo (traçado da adutora, áreas de servidão, perímetros de proteção) virá com o item #06 GIS & estrutura espacial, previsto para a Fase 2 do roadmap. Por ora, sistema produtor e estrutura física vivem como aggregates relacionais sem geometria.
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
