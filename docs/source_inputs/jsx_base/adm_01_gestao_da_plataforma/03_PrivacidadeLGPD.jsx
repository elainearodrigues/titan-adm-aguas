import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock, EmptyState,
} from './tokens.js';

export default function PrivacidadeLGPD() {
  const ropa = [
    { id: 'ROPA-001', categoria: 'Dados de operadores', finalidade: 'Operação de plantas e atribuição de responsabilidade técnica', baseLegal: 'Execução de contrato', volume: '164 titulares', retencao: '5 anos pós-término', risco: 'baixo' },
    { id: 'ROPA-002', categoria: 'Dados de assinatura digital', finalidade: 'Validação ICP-Brasil em submissões SINISA', baseLegal: 'Obrigação legal', volume: '23 titulares', retencao: '7 anos', risco: 'alto' },
    { id: 'ROPA-003', categoria: 'Dados de DPO', finalidade: 'Registro do encarregado conforme art. 41', baseLegal: 'Obrigação legal', volume: '4 titulares', retencao: 'enquanto designado', risco: 'baixo' },
    { id: 'ROPA-004', categoria: 'Logs de auditoria', finalidade: 'Rastreabilidade de modificações em produção', baseLegal: 'Legítimo interesse', volume: '~2.4M registros/mês', retencao: '7 anos', risco: 'médio' },
    { id: 'ROPA-005', categoria: 'Dados de fornecedores', finalidade: 'Gestão de contratos de insumos químicos e MSDS', baseLegal: 'Execução de contrato', volume: '47 titulares', retencao: '5 anos pós-término', risco: 'baixo' },
  ];

  const pedidos = [
    { id: 'TIT-2026-0042', titular: 'José M. (operador desligado)', tipo: 'Exclusão', recebido: '28 abr 2026', prazo: '12 mai 2026', dias: 10, status: 'em análise' },
    { id: 'TIT-2026-0041', titular: 'A. Silva (analista terceiro)', tipo: 'Acesso', recebido: '24 abr 2026', prazo: '08 mai 2026', dias: 6, status: 'em análise' },
    { id: 'TIT-2026-0040', titular: 'M. Oliveira', tipo: 'Portabilidade', recebido: '22 abr 2026', prazo: '06 mai 2026', dias: 4, status: 'em análise' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Privacidade & LGPD']}
        title="Privacidade & LGPD"
        lead="Conformidade integral com a Lei 13.709/2018. ROPA, pedidos de titulares, DPIA, comunicação à ANPD em 72h, política de privacidade publicada."
        actions={<>
          <BtnSecondary>Exportar ROPA (PDF)</BtnSecondary>
          <BtnPrimary>Novo registro de tratamento</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Registros no ROPA" value="5" hint="todas as categorias mapeadas" />
        <Metric label="Pedidos pendentes" value="3" hint="prazo médio 6 dias" />
        <Metric label="DPIA realizadas" value="2" hint="base de alto risco" />
        <Metric label="Incidentes ANPD" value="0" delta="último: nunca" deltaPositive />
      </div>

      <div style={{ display: 'flex', borderBottom: `1px solid ${t.colors.bone}`, marginBottom: 24 }}>
        <SubTab label="ROPA" count={5} active />
        <SubTab label="Pedidos de titulares" count={3} attention />
        <SubTab label="DPIA" count={2} />
        <SubTab label="Incidentes ANPD" count={0} />
        <SubTab label="Política de privacidade" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Art. 37 da Lei 13.709/2018">Registro de operações de tratamento (ROPA)</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Categoria de dado</th>
                <th style={thStyle()}>Finalidade</th>
                <th style={thStyle()}>Base legal</th>
                <th style={thStyle()}>Volume</th>
                <th style={thStyle()}>Retenção</th>
                <th style={thStyle({ textAlign: 'center' })}>Risco</th>
              </tr>
            </thead>
            <tbody>
              {ropa.map((r, i) => (
                <tr key={r.id} style={{ borderBottom: i < ropa.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{r.id}</td>
                  <td style={tdStyle({ fontWeight: 500 })}>{r.categoria}</td>
                  <td style={tdStyle({ color: t.colors.stone, fontSize: 12, maxWidth: 280 })}>{r.finalidade}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{r.baseLegal}</td>
                  <td style={tdStyle({ fontSize: 12, fontFamily: t.font.mono, color: t.colors.stone })}>{r.volume}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{r.retencao}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {r.risco === 'alto' && <Badge type="rust">alto</Badge>}
                    {r.risco === 'médio' && <Badge type="ember">médio</Badge>}
                    {r.risco === 'baixo' && <Badge type="forest">baixo</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Atendimento em até 15 dias · art. 18">Pedidos de titulares ativos</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Titular</th>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle()}>Recebido</th>
                <th style={thStyle()}>Prazo</th>
                <th style={thStyle({ textAlign: 'center' })}>Dias restantes</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i < pedidos.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{p.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{p.titular}</td>
                  <td style={tdStyle()}><Badge type="navy">{p.tipo}</Badge></td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{p.recebido}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{p.prazo}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    <span style={{
                      fontFamily: t.font.mono,
                      fontSize: 12,
                      fontWeight: 500,
                      color: p.dias <= 5 ? t.colors.rust : p.dias <= 8 ? t.colors.ember : t.colors.forest,
                    }}>{p.dias} dias</span>
                  </td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Atender</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <SectionLabel>Comunicação à ANPD</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
            <CalloutBlock tone="success" title="Sem incidentes em aberto">
              Último incidente reportado: nunca. Em caso de incidente que represente risco aos titulares, prazo legal é 72 horas para comunicação à ANPD conforme art. 48.
            </CalloutBlock>
            <div style={{ marginTop: 20 }}>
              <BtnSecondary>Iniciar registro de incidente</BtnSecondary>
            </div>
          </div>
        </div>
        <div>
          <SectionLabel>DPO designado</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 20,
                backgroundColor: t.colors.navyMist,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: t.colors.navy, fontSize: 13, fontWeight: 500,
              }}>JC</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: t.colors.ink }}>Juliana Camargo</div>
                <div style={{ fontSize: 12, color: t.colors.stone }}>Encarregada de Dados</div>
              </div>
            </div>
            <table style={{ width: '100%', fontSize: 12 }}>
              <tbody>
                <tr><td style={{ padding: '4px 0', color: t.colors.slate }}>Email</td><td style={{ padding: '4px 0', textAlign: 'right', fontFamily: t.font.mono, color: t.colors.navy }}>dpo@sabesp.com.br</td></tr>
                <tr><td style={{ padding: '4px 0', color: t.colors.slate }}>Designada em</td><td style={{ padding: '4px 0', textAlign: 'right', fontFamily: t.font.mono, color: t.colors.stone }}>15 ago 2024</td></tr>
                <tr><td style={{ padding: '4px 0', color: t.colors.slate }}>Por operadora</td><td style={{ padding: '4px 0', textAlign: 'right', fontFamily: t.font.mono, color: t.colors.stone }}>Sabesp</td></tr>
              </tbody>
            </table>
          </div>
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
