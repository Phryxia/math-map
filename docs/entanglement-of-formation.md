# 얽힘 형성량

# 개요

**얽힘 형성량(entanglement of formation)** 은 혼합 상태 하나를 순수 상태들을 확률적으로 섞어 만들 때 드는 얽힘의 평균을 가장 작게 한 값이다. 순수 상태의 얽힘은 [양자 얽힘](quantum-entanglement.md)의 얽힘 엔트로피로 재지만, 혼합 상태는 같은 [밀도 행렬](density-matrix.md)을 주는 순수 상태의 섞기가 여러 가지라서 어느 섞기의 평균을 쓸지 정해지지 않는다. 얽힘 형성량은 그 가운데 평균이 가장 작은 섞기를 골라 혼합 상태의 얽힘을 수 하나로 정한다.

# 직관

벨 상태 $\vert\Phi^\pm\rangle=\tfrac1{\sqrt2}(\vert 00\rangle\pm\vert 11\rangle)$ 은 둘 다 얽힘 엔트로피가 $1$ 이다. 이 둘을 반씩 섞은 상태는

$$
\rho=\tfrac12\vert\Phi^+\rangle\langle\Phi^+\vert+\tfrac12\vert\Phi^-\rangle\langle\Phi^-\vert=\tfrac12\vert 00\rangle\langle 00\vert+\tfrac12\vert 11\rangle\langle 11\vert
$$

이다. 왼쪽의 섞기로 보면 얽힘 엔트로피의 평균이 $1$ 이고, 오른쪽의 섞기로 보면 곱 상태 $\vert 00\rangle$, $\vert 11\rangle$ 을 섞은 것이라 평균이 $0$ 이다. 같은 $\rho$ 를 얽힘 없이 만들 수 있으므로 $\rho$ 의 얽힘은 $0$ 이어야 한다. 섞기마다 평균을 계산하고 가장 작은 값을 고르면 이 값이 나온다.

# 정의

## 얽힘 형성량

두 계 $A,B$ 의 밀도 행렬 $\rho$ 를 순수 상태로 나눈 $\rho=\sum_ip_i\vert\psi_i\rangle\langle\psi_i\vert$ $(p_i\ge 0,\thinspace\sum_ip_i=1)$ 전체에 대해

$$
E_F(\rho)=\min\sum_ip_i\thinspace E(\psi_i)
$$

를 $\rho$ 의 얽힘 형성량이라 한다[^1]. $E(\psi)$ 는 $\psi$ 의 얽힘 엔트로피, 곧 $\mathrm{tr}\_B\vert\psi\rangle\langle\psi\vert$ 의 von Neumann 엔트로피다. 직관 절의 $\rho$ 는 $E_F(\rho)=0$ 이다. 순수 상태 $\psi$ 에서는 나누는 방법이 자기 자신뿐이므로 $E_F=E(\psi)$ 다.

## 두 큐비트의 공식

두 큐비트에서는 [얽힘의 일부일처성](monogamy-of-entanglement.md) 문서의 공존도 $C(\rho)$ 로 얽힘 형성량이 정해진다[^2].

$$
E_F(\rho)=h\Bigl(\frac{1+\sqrt{1-C(\rho)^2}}{2}\Bigr),\qquad h(x)=-x\log_2x-(1-x)\log_2(1-x)
$$

$\rho=p\vert\Phi^+\rangle\langle\Phi^+\vert+(1-p)\vert 00\rangle\langle 00\vert$ 이면 대각 성분이 $\rho_{00,00}=1-\frac p2$, $\rho_{11,11}=\frac p2$ 이고 $\rho_{00,11}=\frac p2$ 이며 $\rho_{01,01}=\rho_{10,10}=0$ 이다. 공존도 공식으로 $C=p$ 이고 $E_F=h\bigl((1+\sqrt{1-p^2})/2\bigr)$ 다. $p=1$ 이면 $1$, $p=\frac12$ 이면 약 $0.35$ 다.

# 성질

## 기본 성질

- $E_F(\rho)=0$ 인 것과 $\rho$ 가 분리 가능 상태(separable state)인 것은 동치다. 분리 가능 상태는 곱 상태의 섞기로 쓰이고, 그 섞기의 평균이 $0$ 이다.
- $E_F$ 는 볼록하다. $\rho$ 와 $\sigma$ 의 최적 섞기를 확률 $t$, $1-t$ 로 합치면 $t\rho+(1-t)\sigma$ 의 섞기가 되기 때문이다.
- LOCC(local operations and classical communication)로 $E_F$ 의 기댓값이 늘지 않는다.
- 두 큐비트에서 $h\bigl((1+\sqrt{1-C^2})/2\bigr)$ 는 $C$ 의 증가함수이므로, 공존도와 얽힘 형성량은 두 상태의 얽힘 크기를 같은 순서로 비교한다.

## 얽힘 비용

$\vert\Phi^+\rangle$ 을 $m\_n$ 쌍 써서 LOCC 로 $\rho^{\otimes n}$ 에 가까운 상태를 만드는 비율 $m\_n/n$ 의 하한을 **얽힘 비용(entanglement cost)** $E_C(\rho)$ 라 한다. 이것은 얽힘 형성량을 많은 사본에서 평균한 값과 같다[^3].

$$
E_C(\rho)=\lim_{n\to\infty}\frac{E_F(\rho^{\otimes n})}{n}
$$

[얽힘 정제](entanglement-distillation.md)의 정제 가능 얽힘과는 $E_D(\rho)\le E_C(\rho)\le E_F(\rho)$ 의 관계가 있다. 순수 상태에서는 세 값이 모두 얽힘 엔트로피와 같다.

## 가법성

$E_F(\rho\otimes\sigma)=E_F(\rho)+E_F(\sigma)$ 가 모든 상태에서 성립하면 $E_C=E_F$ 다. Shor 는 이 가법성이 양자 통로의 Holevo 용량(Holevo capacity)의 가법성과 동치임을 보였고, Hastings 가 Holevo 용량의 가법성이 성립하지 않는 통로를 만들었다. 따라서 $E_F$ 는 일반적으로 가법적이지 않다[^4].

# 활용

- 얽힘의 일부일처성. 세 큐비트에서 공존도의 제곱에 대한 Coffman–Kundu–Wootters 부등식(Coffman–Kundu–Wootters inequality)과 공존도의 단조성으로, 한 큐비트가 다른 큐비트와 얽힘 형성량이 $1$ 이면 셋째 큐비트와의 얽힘 형성량은 $0$ 이다.
- 얽힘의 비교. 실험에서 얻은 두 큐비트 상태의 밀도 행렬로 공존도를 계산하고, 얽힘 형성량으로 그 상태를 벨 상태 몇 분의 일 쌍에 해당하는지로 적는다.
- 양자 통로의 용량. 가법성 문제의 동치를 통해 얽힘 형성량의 계산이 양자 통로로 보낼 수 있는 고전 정보량의 계산과 같은 문제가 된다.

[^1]: C. H. Bennett, D. P. DiVincenzo, J. A. Smolin, W. K. Wootters, "Mixed-state entanglement and quantum error correction", *Physical Review A* 54 (1996), 3824–3851.
[^2]: W. K. Wootters, "Entanglement of formation of an arbitrary state of two qubits", *Physical Review Letters* 80 (1998), 2245–2248.
[^3]: P. M. Hayden, M. Horodecki, B. M. Terhal, "The asymptotic entanglement cost of preparing a quantum state", *Journal of Physics A* 34 (2001), 6891–6898.
[^4]: P. W. Shor, "Equivalence of additivity questions in quantum information theory", *Communications in Mathematical Physics* 246 (2004), 453–472; M. B. Hastings, "Superadditivity of communication capacity using entangled inputs", *Nature Physics* 5 (2009), 255–257.

# 연관 문서

## 선수지식

- [얽힘의 일부일처성](monogamy-of-entanglement.md)
- [얽힘 정제](entanglement-distillation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #information_theory #linear_algebra
