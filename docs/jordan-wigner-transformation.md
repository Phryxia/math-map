# Jordan–Wigner 변환

# 개요

**Jordan–Wigner 변환(Jordan–Wigner transformation)** 은 페르미온 모드의 생성·소멸 연산자를 큐비트의 Pauli 행렬의 곱으로 적는 대응이다. 큐비트 연산자는 서로 다른 큐비트에 작용하면 교환하지만, 전자 같은 페르미온의 소멸 연산자는 서로 다른 모드에 작용해도 $a\_1a\_2=-a\_2a\_1$ 처럼 순서를 바꾸면 부호가 바뀐다. 이 변환은 $j$ 번째 모드의 연산자 앞에 $1$ 번부터 $j-1$ 번 큐비트의 $Z$ 를 곱해 그 부호를 만들고, 분자의 전자 해밀토니언을 큐비트 해밀토니언으로 옮긴다.

# 직관

큐비트의 $\vert 1\rangle$ 을 "모드가 차 있다", $\vert 0\rangle$ 을 "비어 있다" 로 읽는다. 찬 모드를 비우는 행렬은 $\sigma^-=\vert 0\rangle\langle 1\vert$ 이다. 모드 둘을 큐비트 둘에 놓고 $a\_1=\sigma^-\_1$, $a\_2=\sigma^-\_2$ 로 두면 두 행렬이 서로 다른 큐비트에 작용하므로 $a\_1a\_2=a\_2a\_1$ 이고, 페르미온의 $a\_1a\_2=-a\_2a\_1$ 과 맞지 않는다.

$Z$ 와 $\sigma^-$ 를 같은 큐비트에서 곱하면 순서에 따라 부호가 다르다. $Z\vert 1\rangle=-\vert 1\rangle$, $Z\vert 0\rangle=\vert 0\rangle$ 이므로 다음이 나온다.

$$
\sigma^-Z=\vert 0\rangle\langle 1\vert Z=-\sigma^-,\qquad Z\sigma^-=Z\vert 0\rangle\langle 1\vert=\sigma^-
$$

그래서 $a\_2$ 에만 $Z\_1$ 을 붙여 $a\_2=Z\_1\sigma^-\_2$ 로 둔다. 그러면 $a\_1a\_2=\sigma^-\_1Z\_1\sigma^-\_2=-\sigma^-\_1\sigma^-\_2$ 이고 $a\_2a\_1=Z\_1\sigma^-\_1\sigma^-\_2=\sigma^-\_1\sigma^-\_2$ 이므로 $a\_1a\_2=-a\_2a\_1$ 이다. 모드가 $N$ 개이면 $j$ 번째 모드의 연산자 앞에 $Z\_1,\dots,Z\_{j-1}$ 을 모두 붙인다.

# 정의

## 정준 반교환 관계

$N$ 개의 연산자 $a\_1,\dots,a\_N$ 이 다음을 만족하면 **정준 반교환 관계(canonical anticommutation relations, CAR)** 를 만족한다고 한다. 여기서 $\lbrace A,B\rbrace=AB+BA$ 이고 $a\_j^\dagger$ 는 $a\_j$ 의 수반 행렬이다.

$$
\lbrace a_j,a_k\rbrace=0,\qquad\lbrace a_j,a_k^\dagger\rbrace=\delta_{jk}I
$$

$a\_j$ 를 $j$ 번째 모드의 **소멸 연산자(annihilation operator)**, $a\_j^\dagger$ 를 **생성 연산자(creation operator)**, $n\_j=a\_j^\dagger a\_j$ 를 **수 연산자(number operator)** 라 한다. 직관 절의 $a\_1a\_2=-a\_2a\_1$ 은 첫 관계의 $j=1$, $k=2$ 인 경우다.

## 변환

$\sigma^-=\vert 0\rangle\langle 1\vert=\tfrac12(X+iY)$ 로 두고, $N$ 큐비트에서 다음 행렬을 정한다.

$$
a_j=Z_1Z_2\cdots Z_{j-1}\thinspace\sigma^-\_j
$$

이 대응을 **Jordan–Wigner 변환** 이라 하고, 앞에 붙은 $Z$ 의 곱을 Jordan–Wigner 끈(Jordan–Wigner string)이라 한다[^1]. 직관 절은 $N=2$ 인 경우다. 계산 기저에서 $a\_j$ 는 $j$ 번째 큐비트가 $1$ 인 기저벡터를 $0$ 으로 바꾸고 부호 $(-1)^{n\_1+\cdots+n\_{j-1}}$ 을 곱한다.

# 성질

## 반교환 관계의 성립

정리. Jordan–Wigner 변환의 $a\_1,\dots,a\_N$ 은 정준 반교환 관계를 만족한다.

증명의 요지. 같은 큐비트에서 $\lbrace\sigma^-,\sigma^+\rbrace=I$, $(\sigma^-)^2=0$ 이고, $\sigma^\pm Z=-Z\sigma^\pm$ 이다. $j\lt k$ 이면 $a\_j$ 와 $a\_k$ 의 곱에서 끈이 겹치는 큐비트는 $Z^2=I$ 로 지워지고, $j$ 번째 큐비트에서 $\sigma^\pm\_j$ 와 $a\_k$ 끈의 $Z\_j$ 의 순서를 바꿀 때만 부호 $-1$ 이 하나 생긴다.

## 수 연산자와 이웃 항

수 연산자에서는 끈이 사라진다.

$$
n_j=a_j^\dagger a_j=\vert 1\rangle\langle 1\vert_j=\tfrac12(I-Z_j)
$$

이웃한 모드 사이의 이동 항은 다음과 같다.

$$
a_j^\dagger a_{j+1}+a_{j+1}^\dagger a_j=\frac12\big(X_jX_{j+1}+Y_jY_{j+1}\big)
$$

$a\_j^\dagger a\_{j+1}$ 에서 두 끈이 $Z\_1\cdots Z\_{j-1}$ 을 지우고 $Z\_j$ 하나가 남으며, $\sigma^+Z=\sigma^+$ 로 그것도 사라진다. 한 줄로 놓인 모드에서 이웃끼리만 이동하는 해밀토니언은 $2$-국소 큐비트 해밀토니언이 된다.

## 끈의 길이

모드 $j$ 와 $k$ 사이의 항 $a\_j^\dagger a\_k$ 는 큐비트 $\vert j-k\vert+1$ 개에 작용한다. 분자의 전자 해밀토니언처럼 모든 모드 쌍이 상호작용하면 항의 무게가 $O(N)$ 이다. Bravyi–Kitaev 변환(Bravyi–Kitaev transformation)은 큐비트에 각 모드의 점유수 대신 점유수의 부분합을 저장해 무게를 $O(\log N)$ 으로 줄였다[^2].

## Majorana 연산자와 Clifford 대수

$c\_{2j-1}=a\_j+a\_j^\dagger$, $c\_{2j}=i(a\_j^\dagger-a\_j)$ 로 두면 $\lbrace c\_p,c\_q\rbrace=2\delta\_{pq}I$ 다. 이 $2N$ 개의 Majorana 연산자(Majorana operator)는 [Clifford 대수](clifford-algebras.md) $\mathrm{Cl}\_{2N}$ 의 생성원의 관계를 만족한다. Jordan–Wigner 변환에서는 다음이고, 이것은 $\mathrm{Cl}\_{2N}(\mathbb C)$ 의 $2^N$ 차원 기약 표현이다.

$$
c_{2j-1}=Z_1\cdots Z_{j-1}X_j,\qquad c_{2j}=Z_1\cdots Z_{j-1}Y_j
$$

해밀토니언이 Majorana 연산자의 이차식이면 시간 발전이 $2N\times 2N$ 직교행렬로 기술되고, 그런 회로는 고전 컴퓨터로 다항식 시간에 시뮬레이션된다[^3].

# 활용

- 횡자기장 [Ising 모형](ising-model.md)의 사슬. $H=-\sum\_jX\_jX\_{j+1}-g\sum\_jZ\_j$ 를 Jordan–Wigner 변환으로 Majorana 연산자의 이차식으로 옮기고 [이산 Fourier 변환](fourier.md)을 하면, 파수 $k$ 의 들뜬 에너지가 다음으로 나온다[^4]. 간격 $2\vert 1-g\vert$ 가 $g=1$ 에서 닫힌다.

$$
\varepsilon_k=2\sqrt{1+g^2-2g\cos k}
$$

- 양자 화학 시뮬레이션. 분자 궤도를 모드로 둔 전자 해밀토니언을 이 변환으로 Pauli 행렬의 합으로 옮긴 뒤 [해밀토니언 시뮬레이션](hamiltonian-simulation.md)이나 [변분 양자 고유값 풀이](variational-quantum-eigensolver.md)에 넣는다.
- 한 줄 스핀 사슬. XY 사슬을 자유 페르미온으로 옮겨 바닥 상태와 상관함수를 정확히 계산한 것이 Lieb, Schultz, Mattis 의 풀이다[^5].

[^1]: P. Jordan, E. Wigner, Über das Paulische Äquivalenzverbot, *Zeitschrift für Physik* 47 (1928), 631–651.
[^2]: S. B. Bravyi, A. Yu. Kitaev, Fermionic quantum computation, *Annals of Physics* 298 (2002), 210–226.
[^3]: B. M. Terhal, D. P. DiVincenzo, Classical simulation of noninteracting-fermion quantum circuits, *Physical Review A* 65 (2002), 032325.
[^4]: P. Pfeuty, The one-dimensional Ising model with a transverse field, *Annals of Physics* 57 (1970), 79–90.
[^5]: E. Lieb, T. Schultz, D. Mattis, Two soluble models of an antiferromagnetic chain, *Annals of Physics* 16 (1961), 407–466.

# 연관 문서

## 선수지식

- [양자 회로](quantum-circuits.md)
- [Clifford 대수](clifford-algebras.md)

## 더 알아보기

- [Kitaev 사슬](kitaev-chain.md)

#computation #linear_algebra #algebra
