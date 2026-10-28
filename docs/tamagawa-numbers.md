# 대수군의 Tamagawa 수

# 개요

**대수군의 Tamagawa 수(Tamagawa number of an algebraic group)** 는 행렬군의 부피를 실수와 모든 소수에서 같은 기준으로 재어 얻는 수다. $\mathrm{SL}\_2(\mathbb Z)$ 의 기본 영역이 $\mathrm{SL}\_2(\mathbb R)$ 안에서 차지하는 부피는 Haar 측도의 상수배를 어떻게 정하느냐에 따라 바뀌므로 그 값만으로는 정해지지 않는다. 유리수 계수의 불변 미분형식 하나로 실수와 모든 소수 $p$ 에서 측도를 함께 정하면 상수배의 선택이 서로 상쇄되고, 그렇게 잰 부피가 Tamagawa 수다.

# 직관

대수군의 Tamagawa 수는 수체 $k$ 위의 연결 [대수군](algebraic-groups.md) $G$ 에 대해, [아델](adeles.md) 위의 점들의 군 $G(\mathbb A)$ 를 유리점들의 군 $G(k)$ 로 나눈 몫의 부피를 표준 측도로 잰 값 $\tau(G)$ 다. 표준 측도는 $k$ 위에서 정의된 불변 미분형식 하나로 모든 자리의 Haar 측도를 한꺼번에 정해 얻는다. 단순연결 반단순군에서 $\tau(G)=1$ 이라는 Weil 추측(Weil's conjecture)은 증명되었고, 이차형식의 질량 공식은 $\tau(\mathrm{SO}\_n)=2$ 와 같은 진술이다.

$\mathrm{SL}\_2(\mathbb Z)$ 의 기본 영역이 $\mathrm{SL}\_2(\mathbb R)$ 안에서 차지하는 부피를 알고 싶다. 부피는 Haar 측도의 상수배를 어떻게 정하느냐에 따라 바뀌므로, 상수를 정할 기준이 있어야 한다. $\mathrm{SL}\_2$ 위에는 유리수 계수로 쓰이는 불변 3-형식 $\omega$ 가 상수배를 빼고 하나 있다. $\omega$ 로 실수 위의 측도를 정하면 $\mathrm{SL}\_2(\mathbb Z)\backslash\mathrm{SL}\_2(\mathbb R)$ 의 부피는 $\zeta(2)=\pi^2/6$ 이다.

같은 $\omega$ 로 소수 $p$ 마다 $\mathrm{SL}\_2(\mathbb Q_p)$ 의 측도도 정한다. $\mathrm{SL}\_2(\mathbb Z_p)$ 의 부피는 법 $p$ 로 줄인 유한군의 크기를 $p^{\dim\mathrm{SL}\_2}=p^3$ 으로 나눈 값

$$
\frac{\lvert\mathrm{SL}\_2(\mathbb F_p)\rvert}{p^3}=\frac{p(p^2-1)}{p^3}=1-p^{-2}
$$

이다. 모든 소수에서 곱하면 $\prod_p(1-p^{-2})=1/\zeta(2)$ 이다.

$\mathrm{SL}\_2(\mathbb A)$ 의 원소는 유리점 하나와 $\mathrm{SL}\_2(\mathbb R)\times\prod_p\mathrm{SL}\_2(\mathbb Z_p)$ 의 원소의 곱으로 쓰인다. 그래서 $\mathrm{SL}\_2(\mathbb Q)\backslash\mathrm{SL}\_2(\mathbb A)$ 의 부피는 실수 쪽 부피 $\zeta(2)$ 와 $p$ 진 쪽 부피의 곱 $1/\zeta(2)$ 를 곱한 $1$ 이다. 실수 쪽과 $p$ 진 쪽에서 $\zeta(2)$ 가 정확히 지워졌고, 이 값 $1$ 이 $\mathrm{SL}\_2$ 의 Tamagawa 수다.

# 정의

$k$ 를 수체, $G$ 를 $k$ 위의 연결 반단순 대수군, $\omega$ 를 $k$ 위에서 정의된 0 이 아닌 좌불변 최고차 미분형식이라 하자. 각 자리 $v$ 에서 $\omega$ 는 국소콤팩트 군 $G(k_v)$ 위의 [Haar 측도](haar-measure.md) $\lvert\omega\rvert_v$ 를 정한다. $d=\dim G$, $D_k$ 를 $k$ 의 판별식이라 할 때

$$
\mu_G=\lvert D_k\rvert^{-d/2}\prod_v\lvert\omega\rvert_v
$$

를 $G(\mathbb A)$ 위의 **Tamagawa 측도(Tamagawa measure)** 라 한다. 반단순군에서는 거의 모든 $v$ 에서 $G(O_v)$ 의 부피가 $1+O(q_v^{-2})$ 꼴이라 곱이 수렴한다. $\omega$ 를 $c\omega$ ($c\in k^\times$) 로 바꾸면 각 측도가 $\lvert c\rvert_v$ 배가 되고 곱 공식 $\prod_v\lvert c\rvert_v=1$ 에 따라 $\mu_G$ 는 바뀌지 않는다.

$G(k)$ 는 $G(\mathbb A)$ 의 이산 부분군이고 몫의 부피는 유한하다(Borel–Harish-Chandra). 이 부피

$$
\tau(G)=\mu_G\bigl(G(k)\backslash G(\mathbb A)\bigr)
$$

를 $G$ 의 **Tamagawa 수** 라 한다.[^1]

[Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)의 선행 계수 공식에 나오는 국소 인자 $c_v$ 도 Tamagawa 수라 부르지만, 그것은 [Néron 모델](neron-models.md)의 성분군의 크기이고 $\tau(G)$ 와 다른 대상이다.

# 성질

## Weil 추측

**정리.** $G$ 가 단순연결 반단순군이면 $\tau(G)=1$ 이다.

Weil 이 고전군에서 계산하고 일반 경우를 추측했다. Langlands 가 분할군에서, Lai 가 준분할군에서 [Eisenstein 급수](eisenstein-series.md)의 상수항으로 증명했고, Kottwitz 가 Arthur 의 대각합 공식으로 $E_8$ 인자가 없는 경우를 증명했다. Chernousov 가 $E_8$ 의 [Hasse 원리](hasse-principle.md)를 증명해 남은 경우가 닫혔다.[^2] 함수체 위에서는 Gaitsgory 와 Lurie 가 대수기하적 방법으로 증명했다.[^3]

## 단순연결이 아닌 군

단순연결이 아닌 군에서는 값이 $1$ 이 아니다. Ono 와 Kottwitz 의 공식에 따르면 반단순군 $G$ 의 Tamagawa 수는 $G$ 의 기본군과 쌍대군의 중심의 [Galois 코호몰로지](galois-cohomology.md)로 정해지고, $\mathbb Q$ 위의 다음 값이 나온다.[^2]

| 군 | Tamagawa 수 |
| -- | -- |
| $\mathrm{SL}\_n$ | $1$ |
| $\mathrm{PGL}\_n$ | $n$ |
| $\mathrm{SO}(q)$, $q$ 는 변수 $3$ 개 이상의 비퇴화 이차형식 | $2$ |

## 질량 공식과의 동치

양의 정부호 이차형식 $q$ 의 [질량 공식](mass-formula.md)은 $q$ 와 같은 유형의 격자들을 자기동형군의 크기로 가중해 더한 값을 국소 밀도의 곱으로 나타낸다. $\mathrm{SO}(q)(\mathbb A)$ 를 $\mathrm{SO}(q)(\mathbb Q)$ 로 나눈 몫을 격자의 유형에 따라 조각내면 각 조각의 부피가 그 격자의 자기동형군 크기의 역수와 국소 부피들의 곱이 된다. 조각의 부피를 더한 것이 $\tau(\mathrm{SO}(q))$ 이므로, 질량 공식은 $\tau(\mathrm{SO}(q))=2$ 와 같다. 이 동치는 Weil 이 지적했다.[^1]

# 활용

- **산술 부분군의 부피.** $\tau(\mathrm{SL}\_n)=1$ 과 $\mathrm{SL}\_n(\mathbb Z_p)$ 의 부피 $\prod_{j=2}^n(1-p^{-j})$ 에서 $\mathrm{SL}\_n(\mathbb Z)\backslash\mathrm{SL}\_n(\mathbb R)$ 의 부피 $\zeta(2)\zeta(3)\cdots\zeta(n)$ 이 나온다. 직관 절의 계산을 거꾸로 쓴 것이다.
- **질량 공식의 일반화.** 이차형식 대신 다른 대수군의 정수 구조에 대해 같은 조각내기를 하면, 유형 안의 대상들의 가중 합이 국소 부피의 곱과 $\tau(G)$ 로 나온다. 정부호 사원수 대수의 극대 순서환을 세는 Eichler 의 질량 공식이 그 예다.

[^1]: A. Weil, *Adeles and Algebraic Groups*, Progress in Mathematics 23, Birkhäuser, 1982.
[^2]: R. E. Kottwitz, "Tamagawa numbers", Annals of Mathematics 127 (1988), 629–646. V. I. Chernousov, "The Hasse principle for groups of type E8", Soviet Mathematics Doklady 39 (1989), 592–596.
[^3]: D. Gaitsgory, J. Lurie, *Weil's Conjecture for Function Fields I*, Annals of Mathematics Studies 199, Princeton University Press, 2019.

# 연관 문서

## 선수지식

- [아델](adeles.md)
- [대수군](algebraic-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #measure_theory
