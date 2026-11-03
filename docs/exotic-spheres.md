# 이색 구면

# 개요

**이색 구면(exotic sphere)** 은 표준 구면과 위상동형이지만 미분동형이 아닌 매끄러운 다양체다. $7$ 차원 구면과 위상동형인 매끄러운 다양체가 주어지면 호몰로지군, 호모토피군 같은 위상 불변량은 모두 구면과 같아서, 매끄러운 구조까지 같은지는 이것들로 가를 수 없다. 그 다양체를 경계로 하는 $8$ 차원 다양체를 만들어 거기서 계산한 수가 표준 구면과 다른 매끄러운 구조를 가려내고, 그렇게 가려진 것이 이색 구면이다.

# 직관

$S^7$ 과 위상동형인 매끄러운 다양체 $M$ 이 표준 $S^7$ 과 미분동형인지 묻는다. 호몰로지군, 호모토피군, 코호몰로지 환은 위상동형으로 결정되므로 모두 구면과 같고 이 물음에 아무 답을 주지 않는다. $M$ 위에서 계산하는 불변량으로는 가를 수 없다.

그래서 $M$ 을 경계로 하는 $8$ 차원 다양체 $W$ 를 만들어 $W$ 에서 계산한다. $W$ 의 첫 [Pontryagin 류](pontryagin-classes.md)가 $0$ 이 되도록 잡으면, [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)가 닫힌 $8$ 다양체 $X$ 에서 주는 등식

$$
45\thinspace\sigma(X)=7p_2\lbrack X\rbrack-p_1^2\lbrack X\rbrack
$$

이 $p_1=0$ 일 때 $45\thinspace\sigma(X)=7p_2\lbrack X\rbrack$ 이 된다. $45$ 와 $7$ 이 서로소이므로 $\sigma(X)$ 는 $7$ 의 배수다. $M$ 을 경계로 하는 두 다양체 $W_1,W_2$ 를 경계에서 붙이면 그런 닫힌 $X$ 가 나오므로 $\sigma(W_1)$ 과 $\sigma(W_2)$ 는 $7$ 로 나눈 나머지가 같다. 그 나머지가 $M$ 의 불변량이다.

$M$ 이 표준 구면이면 $W$ 에 $8$ 차원 공을 붙여 닫힌 다양체를 만들 수 있고 부호수가 변하지 않으므로 나머지가 $0$ 이다. Milnor 는 $S^4$ 위의 $3$ 구면 다발의 전체 공간으로 이 나머지가 $0$ 이 아닌 $M$ 을 만들었다. 그 $M$ 위에는 임계점이 두 개뿐인 함수가 있어 [Morse 이론](morse-theory.md)의 Reeb 정리(Reeb's theorem)로 $S^7$ 과 위상동형이고, 나머지가 $0$ 이 아니므로 표준 $S^7$ 과 미분동형이 아니다. 차원마다 이런 다양체가 몇 개인지는 [수술 이론](surgery-theory.md)으로 계산된다.

# 정의

## 호모토피 구면

**호모토피 $n$ 구면(homotopy $n$-sphere)** 은 $S^n$ 과 호모토피 동치인 닫힌 매끄러운 $n$ 다양체다. **$\Theta_n$** 은 가향 호모토피 $n$ 구면의 h-코보디즘(h-cobordism)류의 집합에 연결합(connected sum) $M\char35{}N$ 으로 연산을 준 군이다. 항등원은 표준 $S^n$ 의 류이고 $M$ 의 역원은 방향을 뒤집은 $-M$ 이다.

$n\ge5$ 에서는 [s-코보디즘 정리](s-cobordism.md)로 h-코보디즘인 단순연결 다양체가 미분동형이므로, $\Theta_n$ 이 호모토피 $n$ 구면의 미분동형류를 센다. **이색 구면** 은 $\Theta_n$ 의 자명하지 않은 원소를 대표하는 다양체다. 직관 절의 Milnor 다양체 $M$ 은 $S^7$ 과 위상동형이므로 호모토피 $7$ 구면이고, 표준 $S^7$ 과 미분동형이 아니므로 $\Theta_7$ 의 $0$ 아닌 원소를 대표하는 이색 구면이다.

## 평행화 가능 경계 부분군

**$bP_{n+1}$** 은 평행화 가능한(parallelizable) $(n+1)$ 다양체의 경계가 되는 호모토피 $n$ 구면의 류들로 이루어진 $\Theta_n$ 의 부분군이다. $S^4$ 의 접원판다발 여덟 개를 $E_8$ Dynkin 도형대로 이어 붙인(plumbing) $8$ 다양체는 평행화 가능하고 부호수가 $8$ 이며, 그 경계는 $bP_8$ 의 원소다.

## Milnor 의 λ 불변량

$M$ 을 호모토피 $7$ 구면, $W$ 를 $\partial W=M$ 이고 $p_1(W)=0$ 인 콤팩트 $8$ 다양체라 한다. 다음을 **Milnor 의 $\lambda$ 불변량(Milnor's λ invariant)** 이라 한다.

$$
\lambda(M)=\sigma(W)\bmod 7
$$

직관 절의 계산으로 $\lambda$ 는 $W$ 의 선택에 무관하다. $W=D^8$ 로 두면 $\lambda(S^7)=0$ 이고, 위 $E_8$ 이어 붙이기의 경계 $\Sigma$ 는 $\lambda(\Sigma)=8\bmod 7=1$ 이다.

# 성질

## 유한성

Kervaire–Milnor 정리(Kervaire–Milnor theorem)는 $n\ne3$ 이면 $\Theta_n$ 이 유한군이라는 것이다.[^1]

증명은 $\Theta_n$ 을 두 조각으로 나눈다. $bP_{n+1}$ 은 수술 장애의 계산으로 유한 순환군이거나 자명하고, 몫 $\Theta_n/bP_{n+1}$ 은 구면의 안정 [호모토피군](homotopy-groups.md)(stable homotopy group)의 부분몫에 들어가 유한하다. $n=3$ 에서는 $\Theta_3$ 이 한 점임이 Perelman 의 결과로 알려졌지만 유한성 증명의 차원 조건은 $n\ge5$ 다.

## Kervaire–Milnor 완전열

$n\ge5$ 에서 다음 완전열이 있다.

$$0\to bP_{n+1}\to\Theta_n\to\pi_n^s/\mathrm{im}\thinspace J$$

여기서 $\pi_n^s$ 는 구면의 $n$ 차 안정 호모토피군이고 $J$ 는 Whitehead 의 [J 준동형](j-homomorphism.md)이다.[^1]

왼쪽 사상은 포함이고 호모토피 구면은 안정적으로 평행화 가능하고, 오른쪽 사상은 평행화(framing)를 하나 골라 얻는 틀 코보디즘(framed cobordism)류를 보낸다. 오른쪽 사상의 상은 전체이거나 지표 $2$ 인 부분군이고, 어느 쪽인지는 Kervaire 불변량(Kervaire invariant)으로 정해진다.

$bP_{n+1}$ 의 구조는 차원의 나머지로 갈린다.

| n+1 | bPₙ₊₁ |
| --- | --- |
| 홀수 | $0$ |
| $4k$, $k\ge 2$ | 유한 순환군, 위수가 Bernoulli 수의 분자로 적힌다 |
| $4k+2$ | $0$ 또는 $\mathbb Z/2$ |

$k\ge 2$ 에서 $4k$ 인 경우의 위수는 다음이다.

$$
\vert bP_{4k}\vert=a_k\thinspace 2^{2k-2}(2^{2k-1}-1)\thinspace\mathrm{num}\Big(\frac{4B_{2k}}{k}\Big)
$$

$B_{2k}$ 는 [Bernoulli 수](bernoulli-numbers.md)이고 $\mathrm{num}$ 은 기약분수의 분자다. $a_k$ 는 $k$ 가 짝수이면 $1$ 이고 홀수이면 $2$ 다. $k=2$ 에서 $2^2(2^3-1)=28$ 이고 $4B_4/2=-1/15$ 의 분자가 $1$ 이므로 위수가 $28$ 이다. $\pi_7^s/\mathrm{im}\thinspace J=0$ 이므로 $\Theta_7\cong\mathbb Z/28$ 이다. $E_8$ 이어 붙이기의 경계 $\Sigma$ 가 생성원이고, $\lambda$ 는 $\Sigma$ 의 $j$ 배에 $j\bmod 7$ 을 준다.

## Kervaire 불변량 1 문제

$bP_{4k+2}$ 가 $0$ 인지 $\mathbb Z/2$ 인지는 차원 $4k+2$ 의 틀 다양체(framed manifold)에 Kervaire 불변량 $1$ 인 것이 있는지와 같다. 있으면 $bP_{4k+2}=0$ 이고 없으면 $\mathbb Z/2$ 다.

Browder 정리(Browder theorem)로 Kervaire 불변량 $1$ 인 틀 다양체는 $n=2^j-2$ 차원에만 있을 수 있다. Hill–Hopkins–Ravenel 정리(Hill–Hopkins–Ravenel theorem)는 $j\ge8$ 이면 그런 $n$ 차원 틀 다양체가 없다는 것이다.[^2]

이 정리로 가능한 차원이 $n\in\lbrace 2,6,14,30,62,126\rbrace$ 로 좁혀졌고, 작은 다섯 차원에서는 전부터 존재가 알려져 있었다. $n=126$ 에서의 존재는 나중에 안정 호모토피군의 계산으로 확인되었다.[^3]

# 활용

- 매끄러운 구조의 개수. $n\ge 5$ 에서 $S^n$ 과 위상동형인 매끄러운 다양체의 방향을 보존하는 미분동형류는 $\Theta_n$ 의 원소와 일대일 대응하고, $n=7$ 에서 $28$ 개다.
- 수술 완전열의 계산례. $X=S^n$ 에 수술 완전열을 적용하면 구조 집합이 $\Theta_n$ 이 된다. 정상 불변량의 계산이 안정 호모토피론이고 장애 사상이 부호수와 Kervaire 불변량이므로, 수술 이론의 세 항이 모두 구체적으로 나오는 경우다.
- 안정 호모토피론. Kervaire 불변량 1 문제는 구면의 안정 호모토피군에서 특정 원소의 존재를 묻는 문제와 동치이고, Adams [스펙트럼 수열](spectral-sequences.md)(Adams spectral sequence)과 동변 호모토피론(equivariant homotopy theory)으로 계산되었다.
- Pontryagin 수와 부호수. $\lambda$ 는 [특성류](characteristic-classes.md)의 수치 불변량으로 매끄러운 구조를 가른다. 부호수 정리의 $p_2$ 계수 $7$ 이 $\lambda$ 불변량의 법이다.

[^1]: M. Kervaire, J. Milnor, "Groups of homotopy spheres: I", Annals of Mathematics **77** (1963), 504–537.

[^2]: M. Hill, M. Hopkins, D. Ravenel, "On the nonexistence of elements of Kervaire invariant one", Annals of Mathematics **184** (2016), 1–262.

[^3]: W. Lin, G. Wang, Z. Xu, "On the last Kervaire invariant problem", arXiv:2412.10879 (2024).

# 연관 문서

## 선수지식

- [수술 이론](surgery-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
