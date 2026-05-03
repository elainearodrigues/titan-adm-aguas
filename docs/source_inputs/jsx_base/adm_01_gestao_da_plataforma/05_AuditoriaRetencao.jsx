import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function AuditoriaRetencao() {
  const auditoria = [
    { ts: '02 mai 14:32:18', user: 'Marina Costa', acao: 'Aprovou (1/2) envelope ENV-CLP-COAG-v4.2', entidade: 'EnvelopeSeguranca', justif: 'Pré-Paiva Castro · revisão de limites' },
    { ts: '02 mai 14:18:04', user: 'Marina Costa', acao: 'Iniciou sessão · 2FA TOTP', entidade: 'SessionAuth', justif: '—' },
    { ts: '02 mai 11:42:51', user: 'Eduardo Tavares', acao: 'Editou ROPA-002 · ajustou retenção', entidade: 'RegistroTratamento', justif: 'Adequação a alinhamento DPO' },
    { ts: '02 mai 09:15:32', user: 'sistema', acao: 'Job sinisa_consolidate_monthly · sucesso', entidade: 'ScheduledJob', justif: '—' },
    { ts: '01 mai 18:55:20', user: 'Paula Andrade', acao: 'Aplicou pacote regulatório PR-AGUAS-v3.1 a 4 plantas', entidade: 'OperacaoEmLote', justif: 'Atualização Portaria 888 v2024.3' },
    { ts: '01 mai 16:30:11', user: 'Ricardo Almeida', acao: 'Registrou calibração BD-02 · 5 pontos R²=0.998', entidade: 'TabelaCalibracao', justif: 'Calibração programada vencida' },
    { ts: '01 mai 14:22:08', user: 'Juliana Camargo', acao: 'Atendeu pedido TIT-2026-0038 · acesso', entidade: 'PedidoTitular', justif: 'Resposta em 9 dias' },
  ];

  const exportacoes = [
    { periodo: 'fev 2026', tamanho: '2.4 GB', destino: 'AWS Glacier', execucao: '01 mar 03:00', status: 'concluído' },
    { periodo: 'mar 2026', tamanho: '2.7 GB', destino: 'AWS Glacier', execucao: '01 abr 03:00', status: 'concluído' },
    { periodo: 'abr 2026', tamanho: '2.5 GB', destino: 'AWS Glacier', execucao: '01 mai 03:00', status: 'concluído' },
    { periodo: 'mai 2026', tamanho: '~2.6 GB', destino: 'AWS Glacier', execucao: '01 jun 03:00 (programada)', status: 'agendada' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Auditoria & retenção']}
        title="Auditoria & retenção"
        lead="Trilhas auditáveis de toda modificação cadastral e de configuração. Retenção diferenciada por classificação de dado, com exportação periódica para armazenamento frio."
        actions={<>
          <BtnSecondary>Exportar log para auditoria</BtnSecondary>
          <BtnPrimary>Configurar política</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Eventos hoje" value="2.847" hint="48% de modificação" />
        <Metric label="Eventos este mês" value="84.310" hint="+3% vs abril" />
        <Metric label="Total armazenado" value="287 GB" hint="quente: 12 GB · frio: 275 GB" />
        <Metric label="Próxima exportação" value="29 dias" hint="01 jun 2026 03:00" />
      </div>

      <div style={{ marginBottom: 32 }}>
        <SectionLabel hint="Quem · quando · valor antes · valor depois · justificativa">Trilha de auditoria</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <div style={{ padding: '12px 16px', borderBottom: `1px solid ${t.colors.bone}`, backgroundColor: t.colors.paper, display: 'flex', gap: 8 }}>
            <Field placeholder="Buscar por usuário, entidade, ação..." mono />
            <BtnSecondary>Filtros</BtnSecondary>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Timestamp</th>
                <th style={thStyle()}>Usuário</th>
                <th style={thStyle()}>Ação</th>
                <th style={thStyle()}>Entidade</th>
                <th style={thStyle()}>Justificativa</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {auditoria.map((a, i) => (
                <tr key={i} style={{ borderBottom: i < auditoria.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{a.ts}</td>
                  <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{a.user}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone, maxWidth: 320 })}>{a.acao}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.navy })}>{a.entidade}</td>
                  <td style={tdStyle({ fontSize: 11, color: t.colors.stone, fontStyle: 'italic' })}>{a.justif}</td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Detalhes</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ padding: '12px 16px', borderTop: `1px solid ${t.colors.bone}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 12, color: t.colors.slate }}>Mostrando 7 de 2.847 eventos hoje</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <BtnGhost>Anterior</BtnGhost>
              <BtnGhost>Próximo</BtnGhost>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
        <div>
          <SectionLabel>Política de retenção</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 0 }}>
            <RetentionRow label="Eventos regulatórios" period="7 anos" base="Lei 14.026/2020" />
            <RetentionRow label="Modificações cadastrais" period="7 anos" base="Auditoria contínua" />
            <RetentionRow label="Eventos operacionais" period="5 anos" base="TR §6.10" />
            <RetentionRow label="Logs de acesso" period="2 anos" base="Boa prática segurança" />
            <RetentionRow label="Telemetria raw" period="90 dias" base="Depois agregada" />
            <RetentionRow label="Telemetria horária" period="1 ano" base="Análise sazonal" />
            <RetentionRow label="Telemetria diária" period="7 anos" base="Histórico operacional" />
            <RetentionRow label="Dados pessoais" period="por finalidade" base="Lei 13.709/2018 art. 16" last />
          </div>
        </div>

        <div>
          <SectionLabel hint="Domingos 03:00">Exportações para frio</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                  <th style={thStyle()}>Período</th>
                  <th style={thStyle({ textAlign: 'right' })}>Tamanho</th>
                  <th style={thStyle()}>Execução</th>
                  <th style={thStyle({ textAlign: 'center' })}>Status</th>
                </tr>
              </thead>
              <tbody>
                {exportacoes.map((e, i) => (
                  <tr key={i} style={{ borderBottom: i < exportacoes.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                    <td style={tdStyle({ fontWeight: 500, fontSize: 12 })}>{e.periodo}</td>
                    <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono, fontSize: 12 })}>{e.tamanho}</td>
                    <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{e.execucao}</td>
                    <td style={tdStyle({ textAlign: 'center' })}>
                      {e.status === 'concluído'
                        ? <Badge type="forest">concluído</Badge>
                        : <Badge type="navy">agendada</Badge>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: 16, borderTop: `1px solid ${t.colors.bone}`, fontSize: 12, color: t.colors.stone }}>
              Destino: AWS Glacier · região sa-east-1 · custo mensal estimado R$ 47,80 · recuperação: 12-48h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RetentionRow({ label, period, base, last }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 16,
      padding: '14px 20px',
      borderBottom: last ? 'none' : `1px solid ${t.colors.bone}`,
      alignItems: 'center',
    }}>
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, color: t.colors.ink, marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 11, color: t.colors.slate, fontFamily: t.font.mono }}>{base}</div>
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, color: t.colors.navy, fontFamily: t.font.mono }}>{period}</div>
    </div>
  );
}
