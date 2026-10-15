# 이색 구면

# 개요

이색 구면은 표준 구면과 위상동형이지만 미분동형이 아닌 매끄러운 다양체다. Milnor 가 $7$ 차원에서 처음 만들었고, 차원마다 몇 개 있는지는 [수술 이론](surgery-theory.md)이 센다.

# 직관

$S^7$ 과 위상동형인 매끄러운 다양체 $M$ 이 표준 $S^7$ 과 미분동형인지 묻는다. 호몰로지군, 호모토피군, 코호몰로지 환은 위상동형으로 결정되므로 모두 구면과 같고 이 물음에 아무 답을 주지 않는다. $M$ 위에서 계산하는 불변량으로는 가를 수 없다.

그래서 $M$ 을 경계로 하는 $8$ 차원 다양체 $W$ 를 만들어 $W$ 에서 계산한다. $W$ 의 첫 [Pontryagin 류](pontryagin-classes.md)가 $0$ 이 되도록 잡으면, [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)가 닫힌 $8$ 다양체 $X$ 에서 주는 등식

$$
45\thinspace\sigma(X)=7p_2\lbrack X\rbrack-p_1^2\lbrack X\rbrack
$$

이 $p_1=0$ 일 때 $45\thinspace\sigma(X)=7p_2\lbrack X\rbrack$ 이 된다. $45$ 와 $7$ 이 서로소이므로 $\sigma(X)$ 는 $7$ 의 배수다. $M$ 을 경계로 하는 두 다양체 $W_1,W_2$ 를 경계에서 붙이면 그런 닫힌 $X$ 가 나오므로 $\sigma(W_1)$ 과 $\sigma(W_2)$ 는 $7$ 로 나눈 나머지가 같다. 그 나머지가 $M$ 의 불변량이다.

$M$ 이 표준 구면이면 $W$ 에 $8$ 차원 공을 붙여 닫힌 다양체를 만들 수 있고 부호수가 변하지 않으므로 나머지가 $0$ 이다. Milnor 는 $S^4$ 위의 $3$ 구면 다발의 전체 공간으로 이 나머지가 $0$ 이 아닌 $M$ 을 만들었다. 그 $M$ 은 높이 함수의 임계점이 두 개뿐이라 [Morse 이론](morse-theory.md)으로 $S^7$ 과 위상동형이고, 표준 $S^7$ 과 미분동형이 아니다.

# 정의

## 호모토피 구면

**호모토피 $n$ 구면**은 $S^n$ 과 호모토피 동치인 닫힌 매끄러운 $n$ 다양체다. $\Theta_n$ 은 호모토피 $n$ 구면의 h-코보디즘류의 집합이고, 연결합 $M\char35 N$ 이 아벨군 구조를 준다. 항등원은 표준 $S^n$ 의 류이고 역원은 방향을 뒤집은 다양체다.

$n\ge5$ 에서는 [s-코보디즘 정리](s-cobordism.md)로 h-코보디즘인 단순연결 다양체가 미분동형이므로, $\Theta_n$ 이 호모토피 $n$ 구면의 미분동형류를 센다. **이색 구면**은 $\Theta_n$ 의 자명하지 않은 원소를 대표하는 다양체다.

## 평행화 가능 경계 부분군

$bP_{n+1}\subset\Theta_n$ 은 평행화 가능한 $(n+1)$ 다양체의 경계가 되는 호모토피 $n$ 구면의 류들로 이루어진 부분군이다. 수술 이론에서 계산되는 부분이 이 부분군이다.

## Milnor 의 λ 불변량

$M$ 을 호모토피 $7$ 구면, $W$ 를 $\partial W=M$ 이고 $p_1(W)=0$ 인 콤팩트 $8$ 다양체라 한다.

$$
\lambda(M)=\sigma(W)\bmod 7
$$

직관 절의 계산이 $\lambda$ 가 $W$ 의 선택에 의존하지 않음을 준다.

# 성질

## 유한성

> **정리 (Kervaire–Milnor).** $n\ne3$ 이면 $\Theta_n$ 은 유한군이다.[^1]

증명은 $\Theta_n$ 을 두 조각으로 나눈다. $bP_{n+1}$ 은 수술 장애의 계산으로 유한 순환군이거나 자명하고, 몫 $\Theta_n/bP_{n+1}$ 은 구면의 안정 [호모토피군](homotopy-groups.md)의 부분몫에 들어가 유한하다. $n=3$ 에서는 $\Theta_3$ 이 한 점임이 Perelman 의 결과로 알려졌지만 유한성 증명의 차원 조건은 $n\ge5$ 다.

## Kervaire–Milnor 완전열

> **정리.** $n\ge5$ 에서 완전열
> $$0\to bP_{n+1}\to\Theta_n\to\pi_n^s/\mathrm{im}\thinspace J$$
> 이 있다. 여기서 $\pi_n^s$ 는 구면의 $n$ 차 안정 호모토피군이고 $J$ 는 Whitehead 준동형이다.[^1]

왼쪽 사상은 포함이고 오른쪽 사상은 호모토피 구면에 평행화를 정해 얻는 틀 코보디즘류를 보낸다. 오른쪽 사상의 상은 전체이거나 지표 $2$ 인 부분군이고, 어느 쪽인지를 Kervaire 불변량이 정한다.

$bP_{n+1}$ 의 구조는 차원의 나머지로 갈린다.

| $n+1$ | $bP_{n+1}$ |
| --- | --- |
| 홀수 | $0$ |
| $4k$ | 유한 순환군, 위수가 Bernoulli 수의 분자로 적힌다 |
| $4k+2$ | $0$ 또는 $\mathbb Z/2$ |

$4k$ 인 경우의 위수는

$$
\vert bP_{4k}\vert=a_k\thinspace 2^{2k-2}(2^{2k-1}-1)\thinspace\mathrm{num}\Big(\frac{4B_{2k}}{k}\Big)
$$

이다. $B_{2k}$ 는 [Bernoulli 수](bernoulli-numbers.md)이고 $\mathrm{num}$ 은 기약분수의 분자이며 $a_k$ 는 $k$ 가 짝수일 때 $1$ , 홀수일 때 $2$ 다. $k=2$ 에서 $2^2(2^3-1)=28$ 이고 $4B_4/2=-1/15$ 의 분자가 $1$ 이므로 위수가 $28$ 이다. $\pi_7^s/\mathrm{im}\thinspace J=0$ 이므로 $\Theta_7\cong\mathbb Z/28$ 이다. $\lambda$ 불변량이 이 순환군의 원소를 $7$ 로 나눈 나머지로 읽은 것이다.

## Kervaire 불변량 1 문제

$bP_{4k+2}$ 가 $0$ 인지 $\mathbb Z/2$ 인지는 차원 $4k+2$ 의 틀 다양체에 Kervaire 불변량 $1$ 인 것이 있는지와 같다. 있으면 $bP_{4k+2}=0$ 이고 없으면 $\mathbb Z/2$ 다.

> **정리 (Hill–Hopkins–Ravenel).** $n=2^j-2$ 이고 $j\ge8$ 이면 Kervaire 불변량 $1$ 인 $n$ 차원 틀 다양체가 없다.[^2]

이 정리로 가능한 차원이 $n\in\lbrace 2,6,14,30,62,126\rbrace$ 로 좁혀졌고, 작은 다섯 차원에서는 전부터 존재가 알려져 있었다. $n=126$ 에서의 존재는 나중에 안정 호모토피군의 계산으로 확인되었다.[^3]

# 활용

- **매끄러운 구조의 개수.** 위상다양체 하나에 매끄러운 구조가 여러 개 얹힐 수 있음을 구면에서 보인다. $\Theta_n$ 의 값이 그 개수이고, $n=7$ 에서 $28$ 이다.
- **수술 완전열의 계산례.** $X=S^n$ 에 수술 완전열을 적용하면 구조 집합이 $\Theta_n$ 이 된다. 정상 불변량의 계산이 안정 호모토피론이고 장애 사상이 부호수와 Kervaire 불변량이므로, 수술 이론의 세 항이 모두 구체적으로 나오는 경우다.
- **안정 호모토피론의 문제 제기.** Kervaire 불변량 1 문제가 구면의 안정 호모토피군에서 특정 원소의 존재를 묻는 형태로 번역되어, Adams 스펙트럼열과 동변 호모토피론의 계산 대상이 되었다.
- **Pontryagin 수와 부호수.** [특성류](characteristic-classes.md)의 수치 불변량이 다양체의 매끄러운 구조를 가르는 자리를 보인다. 부호수 정리의 분모에 나오는 소수가 $\lambda$ 불변량의 법이 된다.

[^1]: M. Kervaire, J. Milnor, "Groups of homotopy spheres: I", Annals of Mathematics **77** (1963), 504–537.

[^2]: M. Hill, M. Hopkins, D. Ravenel, "On the nonexistence of elements of Kervaire invariant one", Annals of Mathematics **184** (2016), 1–262.

[^3]: W. Lin, G. Wang, Z. Xu, "On the last Kervaire invariant problem", arXiv:2412.10879 (2024).

# 연관 문서

## 선수지식

- [수술 이론](surgery-theory.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #differential_geometry
