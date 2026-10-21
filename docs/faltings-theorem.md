# Faltings 정리

# 개요

**Faltings 정리(Faltings's theorem)** 는 수체 위에 정의된 종수 $2$ 이상 곡선의 유리점이 유한 개라는 정리다. Mordell 이 1922 년에 추측했고 Faltings 가 1983 년에 증명했다.[^1] 증명은 곡선을 [Jacobi 다양체](jacobian-variety.md)에 넣고, 주어진 환원 조건을 만족하는 [아벨 다양체](abelian-varieties.md)가 유한 개라는 Shafarevich 추측(Shafarevich conjecture)을 거친다.

# 직관

타원곡선 $y^2=x^3-2$ 는 유리점 $(3,5)$ 를 갖는다. 이 점에서 접선을 그으면 기울기가 $27/10$ 이고, 접선의 식을 곡선에 대입하면 삼차식이 나온다. 접점이 이중근이므로 남은 한 근도 유리수이고, 그 값이 $x=129/100$ 이다. 대응하는 점은 $(129/100,-383/1000)$ 이다. 같은 일을 되풀이하면 분모가 계속 커지므로 서로 다른 유리점이 끝없이 나온다. 삼차식에서 두 근이 유리수이면 셋째 근도 유리수라는 것이 이 되풀이를 떠받친다.

차수를 올린 $y^2=x^5-x+1$ 에서 같은 계산을 해 본다. 유리점 $(0,1)$, $(1,1)$, $(-1,1)$, $(1,-1)$ 이 보인다. $(0,1)$ 과 $(1,-1)$ 을 지나는 직선 $y=1-2x$ 를 대입하면

$$
x^5-4x^2+3x=x(x-1)^2(x^2+2x+3)=0
$$

이고 남은 이차식의 근은 실수가 아니다. 직선이 곡선과 다섯 점에서 만나므로 유리근 몇 개를 빼도 삼차식이 남고, 그 근이 유리수여야 할 이유가 없다. 두 점에서 새 점을 만드는 방법이 없다.

점을 늘릴 수 없다는 것만으로는 유리점이 유한하다고 말할 수 없다. 곡선의 점 $P$ 를 차수 $0$ 인 divisor $P-\infty$ 로 바꾸어 Jacobi 다양체로 보낸다. $y^2=x^5-x+1$ 의 Jacobi 다양체는 차원이 $2$ 이고, 그 유리점은 유한생성 아벨군이다([Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)). 곡선은 이 $2$ 차원 군 안의 $1$ 차원 부분집합이다.

종수가 $1$ 이면 곡선과 Jacobi 다양체의 차원이 둘 다 $1$ 이고 곡선 자신이 군이므로 유한생성 군 전체가 곡선 위에 놓인다. 계수가 양수이면 유리점이 무한하다. 종수가 $2$ 이상이면 Jacobi 다양체의 차원이 곡선보다 크고 곡선은 진부분집합이다. 이때 유한생성 군과 곡선이 만나는 점이 유한 개라는 것이 Faltings 정리다.

# 정의

## 진술

**정리.** $K$ 가 수체이고 $C$ 가 $K$ 위의 매끄러운 사영 곡선이며 종수가 $g\ge 2$ 이면 $C(K)$ 는 유한집합이다.

증명 이전의 이름인 **Mordell 추측(Mordell conjecture)** 으로도 부른다.

## Faltings 높이

$A$ 를 수체 $K$ 위의 $g$ 차원 아벨 다양체, $\mathcal A\to\mathrm{Spec}\thinspace O_K$ 를 그 [Néron 모델](neron-models.md), $e$ 를 영 절단이라 한다. 상대 미분형식의 최고차 외부거듭제곱을 영 절단으로 당긴

$$
\omega\_{\mathcal A}=e^\ast\Omega^g\_{\mathcal A/O_K}
$$

는 $O_K$ 위 계수 $1$ 사영가군이다. 각 복소 매장 $\sigma$ 에서

$$
\Vert\alpha\Vert\_\sigma^2=\frac{i^{g^2}}{2^g}\int\_{A\_\sigma(\mathbb C)}\alpha\wedge\bar\alpha
$$

로 계량을 주면 $\omega\_{\mathcal A}$ 가 계량 선다발이 되고, 그 Arakelov 차수 $\widehat{\deg}$ 를 체의 차수로 나눈

$$
h_F(A)=\frac{1}{\lbrack K:\mathbb Q\rbrack}\widehat{\deg}\thinspace\omega\_{\mathcal A}
$$

를 **Faltings 높이(Faltings height)** 라 한다. 체를 확대해도 값이 바뀌지 않는다.

## Shafarevich 추측

**추측.** 수체 $K$, 유한 소수 집합 $S$, 차원 $g$ 를 고정하면 $S$ 밖에서 좋은 환원을 갖는 $K$ 위 $g$ 차원 아벨 다양체의 동형류는 유한 개다.

Faltings 가 이것을 증명하고 거기서 정리를 끌어냈다. 곡선 판본은 $S$ 밖에서 좋은 환원을 갖는 종수 $g$ 곡선의 동형류가 유한 개라는 것이고, Jacobi 다양체에 위 진술을 적용해 얻는다.

# 성질

## Parshin 트릭

**정리.** Shafarevich 추측이 성립하면 Faltings 정리가 성립한다.

$C$ 를 $S$ 밖에서 좋은 환원을 갖는 종수 $g\ge 2$ 곡선이라 한다. 점 $P\in C(K)$ 마다 $P$ 위에서만 분기하는 유한 덮개 $\pi_P:C_P\to C$ 를 차수가 $g$ 에만 의존하도록 만든다. [Riemann–Hurwitz 공식](riemann-hurwitz-formula.md)이 $C_P$ 의 종수를 차수와 $g$ 로 묶고, $C_P$ 의 정의체는 $K$ 위 차수가 유계인 확대이며 환원이 나쁜 소수는 $S$ 와 차수로 정해지는 유한 집합에 들어간다. 그러므로 곡선 판본의 Shafarevich 추측이 $C_P$ 의 동형류를 유한 개로 묶는다. 한 $C_P$ 에서 나오는 덮개 사상은 유한 개이고 $P$ 는 그 분기점이므로 $C(K)$ 가 유한하다. ∎

## 동종사상 정리

**정리.** $K$ 가 수체이고 $\ell$ 이 소수이면

$$
\mathrm{Hom}(A,B)\otimes\mathbb Z\_\ell\longrightarrow\mathrm{Hom}\_{G_K}(T\_\ell A,T\_\ell B)
$$

가 동형이다.

아벨 다양체 사이의 사상이 Tate 가군 위 [Galois 표현](galois-representations.md)의 사상으로 모두 나온다는 진술이고, 유한체 위의 판본이 Tate 의 정리다. Faltings 가 Shafarevich 추측과 같은 논증으로 증명했다.

## 증명의 요지

세 단계다.

첫째, 동종사상 $A\to B$ 에서 $h_F(A)$ 와 $h_F(B)$ 의 차가 차수와 $K$ 로 유계다. 한 동종사상류 안에서 Faltings 높이가 갖는 값이 유한 개다.

둘째, $K$, $g$, $B$ 를 고정하면 $h_F(A)\le B$ 인 $K$ 위 $g$ 차원 주편극 아벨 다양체의 동형류가 유한 개다. 편극 아벨 다양체의 모듈라이 공간([Siegel 모듈라이 다양체](siegel-modular-variety.md))에서 Faltings 높이가 표준 선다발의 높이와 유계 차이로 일치하고, 높이가 유계인 대수점이 유한 개라는 Northcott 성질이 결론을 준다.

두 단계를 합치면 동종사상류 하나에 든 동형류가 유한 개이고, Tate 가군의 반단순성과 유한 평탄 군스킴의 분류로 동종사상류 자체가 유한 개임이 나온다. 여기서 Shafarevich 추측과 동종사상 정리가 함께 따라온다.

셋째, Parshin 트릭이 Shafarevich 추측을 Faltings 정리로 옮긴다.

## 유효성

증명은 $C(K)$ 의 점의 높이에 상한을 주지 않는다. 그래서 유리점의 목록이 완결되었는지를 이 정리만으로 판정하지 못하고, [Chabauty 방법](chabauty-method.md)과 [Mordell–Weil 시브](mordell-weil-sieve.md)처럼 점을 직접 거르는 방법을 함께 쓴다.

## Vojta 의 증명

Vojta 가 1991 년에 [Diophantine 근사](diophantine-approximation.md)의 방법으로 다른 증명을 주었다.[^2] 곡선의 자기곱 위에서 작은 단면을 가진 계량 선다발을 만들고, 유리점 두 개가 모두 높이가 크면서 가까우면 그 단면이 소멸 조건을 어긴다는 모순을 쓴다. Faltings 가 같은 방법을 준아벨 다양체의 부분다양체로 확장했고 Bombieri 가 논증을 간소화했다.

# 활용

- **Fermat 곡선.** $n\ge 4$ 에서 $x^n+y^n=z^n$ 이 정의하는 사영 곡선은 종수가 $(n-1)(n-2)/2\ge 3$ 이므로 유리점이 유한 개다. 지수마다 원시해가 유한 개라는 결론을 Wiles 의 증명보다 먼저 준다.
- **모듈러 곡선.** 종수가 $2$ 이상인 [모듈러 곡선](modular-curves.md) $X_0(N)$ 의 유리점이 유한 개다. 유리수 위 타원곡선의 비틀림점과 동종사상을 분류하는 논증이 이 유한성을 쓴다.
- **유리점 계산.** Chabauty 방법은 계수가 종수보다 작을 때 유리점을 $p$ 진 적분의 영점으로 세고, Mordell–Weil 시브는 남은 후보를 거른다. 두 방법은 목록이 완결임을 보이는 데 쓰이고, 유한성 자체는 이 정리가 준다.
- **일반화.** [Mordell–Lang 추측](mordell-lang.md)은 아벨 다양체의 부분다양체와 유한생성 부분군의 교집합을 아벨 부분다양체의 잉여류 유한 개로 적는다. 종수 $2$ 이상 곡선을 Jacobi 다양체에 넣고 부분군을 Mordell–Weil 군으로 잡은 것이 이 정리다.

[^1]: G. Faltings, "Endlichkeitssätze für abelsche Varietäten über Zahlkörpern", Invent. Math. 73 (1983), 349–366.

[^2]: P. Vojta, "Siegel's theorem in the compact case", Ann. of Math. 133 (1991), 509–548.

# 연관 문서

## 선수지식

- [아벨 다양체](abelian-varieties.md)
- [Jacobi 다양체](jacobian-variety.md)
- [Néron–Tate 높이와 Mordell–Weil 정리](canonical-height.md)

## 더 알아보기

- [Mordell–Lang 추측](mordell-lang.md)

#number_theory #algebra #complex_analysis
