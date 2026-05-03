import React from 'react';
import {
  t, PageHeader, SectionLabel, BtnPrimary, BtnSecondary, BtnGhost,
  Badge, Pill, Metric, Field, ToggleField, thStyle, tdStyle, CalloutBlock,
} from './tokens.js';

export default function IdentidadeAcesso() {
  const perfis = [
    { nome: 'Administrador', usuarios: 4, escopo: 'Global', escrita: true, fa2: true, descricao: 'Acesso total à plataforma e configuração de perfis' },
    { nome: 'Engenheiro responsável', usuarios: 12, escopo: 'Operadora', escrita: true, fa2: true, descricao: 'Aprovação dupla para envelopes e modo Automático' },
    { nome: 'Gestor', usuarios: 23, escopo: 'Operadora', escrita: true, fa2: true, descricao: 'Visão executiva, aprovação de pacotes regulatórios' },
    { nome: 'Operador', usuarios: 87, escopo: 'Planta', escrita: true, fa2: true, descricao: 'Operação de loops em modo DSS, aceite de recomendações' },
    { nome: 'Analista', usuarios: 31, escopo: 'Planta', escrita: false, fa2: false, descricao: 'Leitura de dados operacionais e laboratoriais' },
    { nome: 'Fiscal regulador', usuarios: 6, escopo: 'Operadora', escrita: false, fa2: true, descricao: 'Acesso somente-leitura ARSESP, ANA, vigilância' },
    { nome: 'DPO', usuarios: 1, escopo: 'Operadora', escrita: true, fa2: true, descricao: 'Privacidade, ROPA, pedidos de titulares LGPD' },
  ];

  const sessions = [
    { user: 'Marina Costa', perfil: 'Engª responsável', ip: '187.45.221.12', ua: 'Firefox 124 · macOS', started: '02 mai 14:18', last: 'agora', mfa: 'TOTP' },
    { user: 'Eduardo Tavares', perfil: 'Eng. responsável', ip: '187.45.221.45', ua: 'Chrome 124 · Windows', started: '02 mai 13:55', last: '2min', mfa: 'TOTP' },
    { user: 'Ricardo Almeida', perfil: 'Operador', ip: '189.121.44.8', ua: 'Edge 124 · Windows', started: '02 mai 06:00', last: '5min', mfa: 'SMS' },
    { user: 'Paula Andrade', perfil: 'Gestor', ip: '177.38.100.91', ua: 'Safari 17 · iOS', started: '02 mai 11:30', last: '12min', mfa: 'TOTP' },
  ];

  return (
    <div>
      <PageHeader
        breadcrumb={['Configurações globais', 'Gestão da plataforma', 'Identidade & acesso']}
        title="Identidade & acesso"
        lead="Perfis com RBAC granular, autenticação de dois fatores obrigatória para escrita em produção, política de senhas, gestão de sessões. Atende a regra R13 de integridade cadastral."
        actions={<>
          <BtnSecondary>Auditar acessos</BtnSecondary>
          <BtnPrimary>Novo perfil</BtnPrimary>
        </>}
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
        <Metric label="Usuários ativos" value="164" hint="em 4 operadoras" />
        <Metric label="2FA habilitado" value="98.2%" delta="+1.8% vs mês anterior" deltaPositive />
        <Metric label="Sessões ativas agora" value="42" hint="pico hoje 14:00" />
        <Metric label="Tentativas bloqueadas" value="7" hint="últimas 24h" />
      </div>

      <div style={{ marginBottom: 40 }}>
        <SectionLabel hint="7 perfis · 164 usuários">Perfis e permissões</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Perfil</th>
                <th style={thStyle({ textAlign: 'right' })}>Usuários</th>
                <th style={thStyle()}>Escopo</th>
                <th style={thStyle({ textAlign: 'center' })}>Escrita</th>
                <th style={thStyle({ textAlign: 'center' })}>2FA</th>
                <th style={thStyle()}>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {perfis.map((p, i) => (
                <tr key={p.nome} style={{ borderBottom: i < perfis.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500 })}>{p.nome}</td>
                  <td style={tdStyle({ textAlign: 'right', fontFamily: t.font.mono })}>{p.usuarios}</td>
                  <td style={tdStyle({ color: t.colors.stone })}>{p.escopo}</td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {p.escrita ? <Badge type="navy">produção</Badge> : <Badge type="neutral">leitura</Badge>}
                  </td>
                  <td style={tdStyle({ textAlign: 'center' })}>
                    {p.fa2 ? <Badge type="forest">obrigatório</Badge> : <Badge type="neutral">opcional</Badge>}
                  </td>
                  <td style={tdStyle({ color: t.colors.stone, fontSize: 12 })}>{p.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 40 }}>
        <div>
          <SectionLabel>Política de senhas</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <ToggleField label="Mínimo 12 caracteres" checked={true} helper="Política recomendada NIST 800-63B" />
            <ToggleField label="Exigir caracteres mistos" checked={true} helper="Maiúsculas, minúsculas, números, símbolos" />
            <ToggleField label="Bloquear senhas vazadas" checked={true} helper="Validação contra haveibeenpwned" />
            <ToggleField label="Renovação obrigatória 90 dias" checked={false} helper="Desabilitado por boas práticas atuais" />
            <ToggleField label="Histórico de últimas 5 senhas" checked={true} />
          </div>
        </div>
        <div>
          <SectionLabel>2FA</SectionLabel>
          <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}`, padding: 20 }}>
            <ToggleField label="Obrigatório para perfis com escrita" checked={true} helper="Regra R13 bloqueante" />
            <ToggleField label="TOTP (Google Auth, Authy)" checked={true} helper="Recomendado" />
            <ToggleField label="SMS (fallback)" checked={true} helper="Apenas como recuperação" />
            <ToggleField label="WebAuthn / Passkeys" checked={false} helper="Roadmap Q3 2026" />
            <ToggleField label="Backup codes" checked={true} helper="10 códigos de uso único" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <SectionLabel hint="42 sessões · timeout 8h">Sessões ativas</SectionLabel>
        <div style={{ backgroundColor: t.colors.pure, border: `1px solid ${t.colors.bone}` }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: t.colors.paper, borderBottom: `1px solid ${t.colors.bone}` }}>
                <th style={thStyle()}>Usuário</th>
                <th style={thStyle()}>Perfil</th>
                <th style={thStyle()}>IP origem</th>
                <th style={thStyle()}>User agent</th>
                <th style={thStyle()}>Iniciada</th>
                <th style={thStyle()}>Última atividade</th>
                <th style={thStyle({ textAlign: 'center' })}>2FA</th>
                <th style={thStyle({ textAlign: 'right' })}></th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => (
                <tr key={i} style={{ borderBottom: i < sessions.length - 1 ? `1px solid ${t.colors.bone}` : 'none' }}>
                  <td style={tdStyle({ fontWeight: 500 })}>{s.user}</td>
                  <td style={tdStyle({ color: t.colors.stone, fontSize: 12 })}>{s.perfil}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.stone })}>{s.ip}</td>
                  <td style={tdStyle({ fontSize: 12, color: t.colors.stone })}>{s.ua}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{s.started}</td>
                  <td style={tdStyle({ fontFamily: t.font.mono, fontSize: 11, color: t.colors.slate })}>{s.last}</td>
                  <td style={tdStyle({ textAlign: 'center', fontSize: 11, fontFamily: t.font.mono, color: t.colors.forest })}>{s.mfa}</td>
                  <td style={tdStyle({ textAlign: 'right' })}>
                    <BtnGhost>Encerrar</BtnGhost>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
