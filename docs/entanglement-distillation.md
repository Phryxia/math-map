# 얽힘 정제

# 개요

**얽힘 정제(entanglement distillation)** 는 잡음이 섞인 얽힌 쌍 여러 개에서 국소 연산과 고전 통신만으로 잡음이 적은 얽힌 쌍을 더 적게 뽑아내는 절차다. 앨리스와 밥이 $\vert\Phi^+\rangle=\tfrac1{\sqrt 2}(\vert 00\rangle+\vert 11\rangle)$ 을 나눠 가지려고 큐비트를 보냈는데, 전송 중 네 번에 한 번꼴로 한쪽 큐비트가 뒤집혀 $\vert\Psi^+\rangle=\tfrac1{\sqrt 2}(\vert 01\rangle+\vert 10\rangle)$ 이 되었다고 하자. 이 쌍으로 [양자 순간이동](quantum-teleportation.md)을 하면 옮긴 상태도 네 번에 한 번꼴로 틀린다. 얽힘 정제는 쌍 두 개를 비교해 하나를 버리는 단계를 되풀이해, 남은 쌍이 $\vert\Phi^+\rangle$ 일 확률을 $1$ 에 가깝게 올린다.

# 직관

앨리스와 밥이 쌍 두 개를 가진다. 각 쌍은 확률 $F=\tfrac34$ 로 $\vert\Phi^+\rangle$, 확률 $\tfrac14$ 로 $\vert\Psi^+\rangle$ 이다. 두 상태는 두 큐비트의 값이 같은지 다른지로 갈린다.

각자 자기 쪽 두 큐비트에 첫 쌍을 제어 큐비트, 둘째 쌍을 대상 큐비트로 하는 $\mathrm{CNOT}$ 을 건다. 그러면 둘째 쌍의 "같음, 다름" 이 두 쌍의 "같음, 다름" 의 배타적 논리합으로 바뀌고 첫 쌍은 그대로다.

이제 둘째 쌍을 각자 계산 기저로 측정해 결과를 전화로 비교한다. 결과가 같으면 두 쌍이 원래 둘 다 $\vert\Phi^+\rangle$ 이었거나 둘 다 $\vert\Psi^+\rangle$ 이었다. 확률은 각각 $\tfrac9{16}$ 과 $\tfrac1{16}$ 이다. 결과가 다르면 첫 쌍을 버린다. 남긴 첫 쌍이 $\vert\Phi^+\rangle$ 일 확률은

$$
F'=\frac{F^2}{F^2+(1-F)^2}=\frac{9/16}{9/16+1/16}=\frac9{10}
$$

이고, 남길 확률은 $\tfrac{10}{16}$ 이다. 쌍 두 개를 써서 $0.75$ 짜리 쌍 하나를 $0.9$ 짜리 쌍 하나로 바꿨다. 같은 단계를 $0.9$ 짜리 쌍들에 다시 걸면 $\tfrac{0.81}{0.82}=0.988$ 이 된다.

# 정의

## 충실도

[밀도 행렬](density-matrix.md) $\rho$ 의 $\vert\Phi^+\rangle$ 에 대한 **충실도(fidelity)** 는 $F=\langle\Phi^+\vert\rho\vert\Phi^+\rangle$ 이다. 직관 절의 쌍 $\rho=\tfrac34\vert\Phi^+\rangle\langle\Phi^+\vert+\tfrac14\vert\Psi^+\rangle\langle\Psi^+\vert$ 는 $F=\tfrac34$ 다.

## 정제 규약과 정제 가능 얽힘

$\rho^{\otimes n}$ 에 LOCC(local operations and classical communication)를 걸어 $m\_n$ 쌍의 상태 $\sigma\_n$ 을 얻고 $\langle\Phi^+\vert^{\otimes m\_n}\sigma\_n\vert\Phi^+\rangle^{\otimes m\_n}\to 1$ 이 되게 하는 절차의 열을 **정제 규약(distillation protocol)** 이라 한다. 그 비율 $\lim m\_n/n$ 의 상한을

$$
E_D(\rho)=\sup\thinspace\lim_{n\to\infty}\frac{m_n}{n}
$$

라 쓰고 $\rho$ 의 **정제 가능 얽힘(distillable entanglement)** 이라 한다. $E\_D(\rho)\gt 0$ 이면 $\rho$ 를 **정제 가능(distillable)** 하다고 한다.

## 반복 규약

직관 절의 단계, 곧 쌍 두 개에 양쪽이 $\mathrm{CNOT}$ 을 걸고 대상 쌍을 측정해 결과가 같을 때만 제어 쌍을 남기는 단계를 남은 쌍들에 되풀이하는 절차를 **반복 규약(recurrence protocol)** 이라 한다. $\vert\Phi^+\rangle$ 을 확률 $F$, 나머지 세 Bell 상태 $\vert\Phi^-\rangle$, $\vert\Psi^\pm\rangle$ 을 각각 확률 $\tfrac{1-F}3$ 로 섞은 상태에서, 단계마다 양쪽이 같은 무작위 회전을 걸어 이 꼴을 유지하면 한 단계는 충실도를

$$
F'=\frac{F^2+\tfrac19(1-F)^2}{F^2+\tfrac23F(1-F)+\tfrac59(1-F)^2}
$$

로 바꾸고, $F\gt\tfrac12$ 이면 $F'\gt F$ 다[^1]. 단계마다 쌍이 절반 이하로 줄어 비율은 $0$ 으로 가므로, 반복 규약은 남은 쌍을 해싱 규약에 넘기는 앞단으로 쓴다.

## 해싱 규약

$\rho$ 가 네 Bell 상태를 확률 $p=(p\_1,p\_2,p\_3,p\_4)$ 로 섞은 것일 때, $n$ 쌍 전체에 어느 쌍이 어느 Bell 상태인지를 나타내는 $2n$ 비트 열의 무작위 부분집합 패리티를 양쪽 측정으로 하나씩 알아내면, 패리티 약 $nH(p)$ 개로 그 열이 정해진다. 측정에 쓴 쌍을 버리고 남은 쌍을 열에 따라 $\vert\Phi^+\rangle$ 으로 고치는 절차를 **해싱 규약(hashing protocol)** 이라 한다[^2]. $H(p)$ 는 $p$ 의 [Shannon 엔트로피](entropy.md)다.

# 성질

## 해싱 하한

해싱 규약으로 $E\_D(\rho)\ge 1-H(p)$ 를 얻는다. 직관 절의 쌍은 $p=(\tfrac34,\tfrac14,0,0)$ 이라 $E\_D\ge 1-h(\tfrac34)=1-0.811=0.189$ 다. 일반 상태에서는 $E\_D(\rho)\ge S(\rho\_B)-S(\rho\_{AB})$ 이고, $S$ 는 von Neumann 엔트로피다(해싱 부등식, hashing inequality)[^3].

## 순수 상태

순수 상태 $\vert\psi\rangle$ 에서는 정제 가능 얽힘이 [양자 얽힘](quantum-entanglement.md)의 얽힘 엔트로피와 같다. 얽힘 농축이 비율 $E(\psi)$ 를 달성하고, 그보다 큰 비율로 정제하면 얽힘 희석과 합쳐 LOCC 로 얽힘 엔트로피를 늘리게 되어 모순이다.

## 부분 전치가 양인 상태

부분 전치의 [고윳값](eigenvalues.md)이 모두 $0$ 이상인 상태는 $E\_D=0$ 이다[^4]. LOCC 는 부분 전치가 양인 상태를 같은 성질의 상태로 보내고, $\vert\Phi^+\rangle$ 은 부분 전치가 음의 고윳값을 가지므로 그런 상태에서는 $\vert\Phi^+\rangle$ 에 가까운 쌍이 나오지 않는다. 이런 상태 가운데 얽힌 것이 [얽힘 증인](entanglement-witness.md)의 속박 얽힘이다.

## 두 큐비트

두 큐비트의 얽힌 상태는 모두 정제 가능하다[^5]. 국소 필터로 충실도를 $\tfrac12$ 위로 올린 뒤 반복 규약과 해싱 규약을 이어 건다. 등방 상태 $p\vert\Phi^+\rangle\langle\Phi^+\vert+(1-p)\tfrac14 I$ 의 충실도는 $\tfrac{1+3p}4$ 이므로 얽혀 있는 $p\gt\tfrac13$ 에서 곧바로 $F\gt\tfrac12$ 이다.

# 활용

- 양자 중계기. 먼 거리의 쌍은 짧은 구간의 쌍을 양자 순간이동의 얽힘 교환으로 이어 만든다. 이을 때마다 충실도가 떨어지므로 구간마다 얽힘 정제로 충실도를 다시 올린다.
- 양자 키 분배. [양자 키 분배](quantum-key-distribution.md)의 BB84(Bennett–Brassard 1984) 규약의 안전성 증명은 오류율 $Q$ 인 쌍들에 해싱 규약에 해당하는 정제를 거는 가상의 규약과 같아서, 키 비율 $1-2h(Q)$ 가 해싱 하한과 같은 꼴이다.
- 양자 오류정정부호. 한쪽 방향의 고전 통신만 쓰는 정제 규약은 [양자 오류정정부호](quantum-error-correction.md)와 대응한다. 앨리스가 측정한 증후를 밥에게 보내 밥이 보정하는 것이 부호의 증후 측정과 보정이다[^2].

[^1]: C. H. Bennett, G. Brassard, S. Popescu, B. Schumacher, J. A. Smolin, W. K. Wootters, Purification of noisy entanglement and faithful teleportation via noisy channels, *Physical Review Letters* 76 (1996), 722–725.
[^2]: C. H. Bennett, D. P. DiVincenzo, J. A. Smolin, W. K. Wootters, Mixed-state entanglement and quantum error correction, *Physical Review A* 54 (1996), 3824–3851.
[^3]: I. Devetak, A. Winter, Distillation of secret key and entanglement from quantum states, *Proceedings of the Royal Society A* 461 (2005), 207–235.
[^4]: M. Horodecki, P. Horodecki, R. Horodecki, Mixed-state entanglement and distillation: is there a "bound" entanglement in nature?, *Physical Review Letters* 80 (1998), 5239–5242.
[^5]: M. Horodecki, P. Horodecki, R. Horodecki, Inseparable two spin-1/2 density matrices can be distilled to a singlet form, *Physical Review Letters* 78 (1997), 574–577.

# 연관 문서

## 선수지식

- [양자 얽힘](quantum-entanglement.md)

## 더 알아보기

- [얽힘 형성량](entanglement-of-formation.md)

#computation #information_theory #linear_algebra
