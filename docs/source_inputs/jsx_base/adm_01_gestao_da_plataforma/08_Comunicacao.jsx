import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function Comunicacao() {
  const canais = [
    { nome: 'E-mail transacional · SES', tipo: 'email', status: 'ativo', volume: '4.2k/mês', delivery: '99.7%', hint: 'AWS SES · sa-east-1' },
    { nome: 'SMS · Twilio', tipo: 'sms', status: 'ativo', volume: '847/mês', delivery: '98.4%', hint: 'Apenas alertas críticos' },
    { nome: 'Slack · #titan-alerts', tipo: 'mensageria', status: 'ativo', volume: '2.1k/mês', delivery: '100%', hint: 'Webhook outbound' },
    { nome: 'Microsoft Teams · TI Sabesp', tipo: 'mensageria', status: 'ativo', volume: '893/mês', delivery: '100%', hint: 'Webhook outbound' },
    { nome: 'Push · App TITAN', tipo: 'push', status: 'inativo', volume: '0', delivery: '—', hint: 'Roadmap 2027' },
    { nome: 'Webhook · Jira Service Desk', tipo: 'webhook', status: 'ativo', volume: '124/mês', delivery: '99.2%', hint: 'Abertura automática de tickets' },
  ];

  const templates = [
    { id: 'TPL-001', nome: 'Pendência regulatória bloqueante', evento: 'Violação R1-R14', canais: 'email + slack', destinatarios: 'Eng. responsável + DPO' },
    { id: 'TPL-002', nome: 'Calibração de bomba dosadora vencendo', evento: 'BombaDosadora · 30d antes', canais: 'email', destinatarios: 'Operação local' },
    { id: 'TPL-003', nome: 'Bandeira tarifária não cadastrada (dia 28)', evento: 'BandeiraTarifaria · D-0', canais: 'email + slack', destinatarios: 'Gestor + admin' },
    { id: 'TPL-004', nome: 'Submissão SINISA aceita', evento: 'SubmissaoExportacao · aceita', canais: 'email', destinatarios: 'Eng. responsável + DPO' },
    { id: 'TPL-005', nome: 'Fallback automático Auto → DSS', evento: 'ModoOperacao · transicao', canais: 'sms + slack', destinatarios: 'Operador + Eng. on-call' },
    { id: 'TPL-006', nome: 'Outorga ANA expirando', evento: 'OutorgaHidrica · 90d antes', canais: 'email', destinatarios: 'Eng. responsável + jurídico' },
    { id: 'TPL-007', nome: 'Pedido LGPD recebido', evento: 'PedidoTitular · novo', canais: 'email', destinatarios: 'DPO' },
    { id: 'TPL-008', nome: 'Incidente de segurança crítico', evento: 'IncidenteSeguranca · alto', canais: 'sms + slack + email', destinatarios: 'CSIRT' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Comunicação']}
        title="Comunicação"
        lead="Canais de notificação opcionais, templates de mensagem por evento, regras de roteamento por severidade e perfil. Capacidades sob demanda."
        actions={<>
          <BtnSecondary>Testar entrega</BtnSecondary>
          <BtnPrimary>Novo canal</BtnPrimary>
        </>}
      />

      <CalloutBlock tone="info" title="Alarmes sempre estão na interface da plataforma">
        Canais externos (e-mail, SMS, Slack, Teams, webhooks) são opcionais e configuráveis por operadora. A plataforma sempre exibe alarmes críticos na interface — canais externos são amplificação, não substituição.
      </CalloutBlock>

      <div style={{ height: 32 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Canais ativos" value="5" hint="de 6 configurados" />
        <Metric label="Mensagens este mês" value="8.190" hint="entrega 99.4% média" />
        <Metric label="Templates configurados" value="8" hint="cobrindo todos os eventos críticos" />
        <Metric label="Taxa de entrega 30d" value="99.4%" delta="↗ 0.2% vs anterior" deltaPositive />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="6 cadastrados">Canais de notificação</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Canal</th>
                <th style={thStyle()}>Tipo</th>
                <th style={thStyle({ textAlign: 'right' })}>Volume mensal</th>
                <th style={thStyle({ textAlign: 'right' })}>Delivery</th>
                <th style={thStyle()}>Configuração</th>
                <th style={thStyle({ textAlign: 'center' })}>Status</th>
              </tr>
            </thead>
            <tbody>
              {canais.map((c, i) => (
                <tr key={i} style={{ borderBottom: i < canais.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500 })}>{c.nome}</td>
                  <td style={tdStyle()}><Badge type="neutral">{c.tipo}</Badge></td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{c.volume}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12, color: t.colors.forest })}>{c.delivery}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono })}>{c.hint}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {c.status === 'ativo'
                      ? <Pill type="forest" filled>ativo</Pill>
                      : <Pill type="neutral">inativo</Pill>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="8 ativos">Templates de mensagem por evento</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>ID</th>
                <th style={thStyle()}>Nome</th>
                <th style={thStyle()}>Gatilho</th>
                <th style={thStyle()}>Canais</th>
                <th style={thStyle()}>Destinatários</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {templates.map((tpl, i) => (
                <tr key={tpl.id} style={{ borderBottom: i < templates.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{tpl.id}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{tpl.nome}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{tpl.evento}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{tpl.canais}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{tpl.destinatarios}</td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Editar</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <SectionLabel>Regras de roteamento</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <RoutingRule severity="crítico" channels="SMS + Slack + e-mail" recipients="Eng. on-call + responsável" />
            <RoutingRule severity="alerta" channels="Slack + e-mail" recipients="Operação + responsável" />
            <RoutingRule severity="informativo" channels="e-mail (digest diário)" recipients="Conforme template" last />
          </div>
        </div>
        <div>
          <SectionLabel>Quiet hours e escalação</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <ToggleField label="Quiet hours fora do expediente" checked={true} helper="22:00 às 06:00 BRT · apenas críticos" />
            <ToggleField label="Escalação automática se sem resposta" checked={true} helper="Crítico → escalar em 15 min" />
            <ToggleField label="Acknowledge obrigatório para críticos" checked={true} helper="Operador deve confirmar recebimento" />
            <ToggleField label="Digest diário 08:00 BRT" checked={true} helper="Resumo de informativos do dia anterior" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RoutingRule({ severity, channels, recipients, last }) {
  const colorMap = {
    'crítico': t.colors.rust,
    'alerta': t.colors.ember,
    'informativo': t.colors.navy,
  };
  return (
    <div style={{
      padding: '12px 0',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 110 }}>
        <span style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: colorMap[severity] }} />
        <span style={{ fontSize: 12, fontWeight: 500, color: t.colors.ink, textTransform: 'capitalize' }}>{severity}</span>
      </div>
      <div style={{ flex: 1, fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>{channels}</div>
      <div style={{ flex: 1, fontSize: 12, color: t.colors.stone, textAlign: 'right' }}>{recipients}</div>
    </div>
  );
}
