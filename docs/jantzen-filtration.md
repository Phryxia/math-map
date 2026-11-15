# Jantzen 여과

# 개요

**Jantzen 여과(Jantzen filtration)** 는 Verma 가군 위의 반변 형식이 몇 차로 퇴화하는지에 따라 Verma 가군을 층으로 나눈 감소 부분가군 열이다. $\mathfrak{sl}\_2$ 의 Verma 가군에서 최고무게 벡터에 $f$ 를 거듭 곱하다 보면 어느 단계에서 $e$ 를 곱해도 $0$ 이 되는 벡터가 나와 부분가군이 생기는데, 무게가 크면 그런 단계가 어디인지 손으로 찾기 어렵다. Jantzen 여과는 최고무게를 조금 움직여 형식의 값이 $0$ 으로 가는 빠르기를 재고, 그 층들의 지표의 합을 닫힌 꼴로 주어 부분가군의 구조를 계산하게 한다.

# 직관

$\mathfrak{sl}\_2$ 의 Verma 가군 $M(\lambda)$ 는 $v,fv,f^2v,\dots$ 로 펼쳐지고 $e f^kv=k(\lambda-k+1)f^{k-1}v$ 다. $\lambda=0$ 이면 $k=1$ 에서 계수가 $0$ 이어서 $e\cdot fv=0$ 이고, $fv$ 가 생성하는 부분가군이 생긴다.

이 계수를 한 수로 모은다. $f^kv$ 에 $e$ 를 $k$ 번 곱하면 $v$ 의 상수배가 되고, 그 상수는 다음과 같다.

$$
\prod_{j=1}^{k}j(\lambda-j+1)=k!\thinspace\lambda(\lambda-1)\cdots(\lambda-k+1)
$$

$\lambda=0$ 에서 $k\ge 1$ 이면 이 값이 $0$ 이고, $0$ 이 되는 $f^kv$ 들이 부분가군을 이룬다.

$\lambda$ 를 $0$ 에서 $t$ 로 조금 움직인다. 위 값은 $k\ge1$ 에서 $t$ 를 정확히 한 번 인수로 가진다. $t$ 로 한 번 나누어지는 벡터가 $fv,f^2v,\dots$ 이고 두 번 나누어지는 벡터는 없다. 나누어지는 횟수로 층을 나눈 것이 Jantzen 여과다.

# 정의

## 반변 형식

$\mathfrak g$ 를 복소 반단순 [Lie 대수](lie-algebras.md), $\sigma$ 를 각 근벡터 $e_\alpha$ 와 $f_\alpha$ 를 맞바꾸고 $\mathfrak h$ 를 고정하는 반자기동형이라 하자. [범주 O](category-o.md) 의 Verma 가군 $M(\lambda)$ 위에는 최고무게 벡터 $v_\lambda$ 에서 $(v_\lambda,v_\lambda)=1$ 이고 모든 $X\in\mathfrak g$ 에서 $(Xu,w)=(u,\sigma(X)w)$ 인 대칭 쌍선형 형식이 하나 있다. 이것을 **반변 형식(contravariant form)** 또는 Shapovalov 형식(Shapovalov form)이라 한다.

서로 다른 무게 공간은 이 형식으로 직교하고, 형식의 근기(radical)는 $M(\lambda)$ 의 극대 부분가군이다. 직관 절의 $\mathfrak{sl}\_2$ 에서는 $\sigma(f)=e$ 이므로 $(f^kv,f^kv)=k!\thinspace\lambda(\lambda-1)\cdots(\lambda-k+1)$ 이다.

## 여과

$A=\mathbb C\lbrack t\rbrack$ 를 $t=0$ 에서 국소화한 환이라 하고, 최고무게 $\lambda+t\rho$ 의 Verma 가군 $M_A$ 를 $A$ 위에서 만든다. $\rho$ 는 양근의 합의 절반이다. $M_A$ 를 $t=0$ 으로 보내면 $M(\lambda)$ 다. 각 $i\ge 0$ 에 대해 다음을 둔다.

$$
M^i=\bigl\lbrace\thinspace u(0):\ u\in M_A,\ (u,M_A)\subseteq t^iA\thinspace\bigr\rbrace
$$

$M(\lambda)=M^0\supseteq M^1\supseteq M^2\supseteq\cdots$ 를 $M(\lambda)$ 의 Jantzen 여과라 한다. $M^1$ 은 반변 형식의 근기, 곧 극대 부분가군이고, 무게 공간마다 $i$ 가 충분히 크면 $M^i$ 의 그 무게 성분이 $0$ 이다.

직관 절에서 $\rho=1$ 이므로 $\lambda+t\rho=t$ 이고, $M^1$ 은 $fv,f^2v,\dots$ 가 펼치는 공간, $M^2=0$ 이다.

# 성질

## 합 공식

Jantzen 합 공식(Jantzen sum formula)은 다음이다.[^1]

$$
\sum_{i\gt 0}\mathrm{ch}\thinspace M^i=\sum_{\alpha}\mathrm{ch}\thinspace M(s_\alpha\cdot\lambda)
$$

오른쪽 합은 $\langle\lambda+\rho,\alpha^\vee\rangle$ 가 양의 정수인 양근 $\alpha$ 에 대한 것이고, $s_\alpha\cdot\lambda=s_\alpha(\lambda+\rho)-\rho$ 는 점작용이다.

증명의 요지. 무게 공간마다 반변 형식의 행렬식이 Shapovalov 행렬식 공식(Shapovalov determinant formula)으로 일차식들의 곱으로 적힌다. 행렬식이 $t$ 로 나누어지는 횟수는 각 $M^i$ 의 그 무게 성분 차원의 합과 같고, 일차식마다의 기여를 모으면 오른쪽이 된다.

직관 절의 $\lambda=0$ 에서 $\langle 0+\rho,\alpha^\vee\rangle=1$ 이고 $s_\alpha\cdot 0=-2$ 이므로 오른쪽은 $\mathrm{ch}\thinspace M(-2)$ 다. 왼쪽은 $\mathrm{ch}\thinspace M^1$ 이고 $M^1\cong M(-2)$ 이다.

## 단순성 판정

$M(\lambda)$ 가 단순한 것은 모든 양근 $\alpha$ 에서 $\langle\lambda+\rho,\alpha^\vee\rangle$ 가 양의 정수가 아닌 것과 동치다. 합 공식의 오른쪽이 $0$ 인 것과 $M^1=0$ 인 것이 동치이므로 이 판정이 나온다. $\mathfrak{sl}\_2$ 에서는 $\lambda$ 가 음이 아닌 정수가 아닐 때 $M(\lambda)$ 가 단순하다.

## Jantzen 추측

정수 정칙 무게에서 층 $M^i/M^{i+1}$ 에 단순 가군 $L(\mu)$ 가 나오는 중복도가 [Kazhdan–Lusztig 다항식](kazhdan-lusztig.md)의 계수로 주어지고, 여과가 Verma 가군의 부분 Verma 가군에 제한한 여과와 맞물린다는 것이 Jantzen 추측(Jantzen conjecture)이다. Beilinson 과 Bernstein 이 깃발다양체 위의 혼합 층의 무게 여과로 증명했다.[^2]

# 활용

- Verma 가군의 구조. 합 공식에서 $M(s_\alpha\cdot\lambda)$ 가 $M(\lambda)$ 의 부분가군이라는 Verma 의 정리와 BGG(Bernstein–Gelfand–Gelfand) 정리의 포함 관계를 지표 수준에서 확인하고, 길이가 짧은 경우에는 합성 인자를 직접 읽는다.
- 대수군의 표수 $p$ 표현. 같은 변형 방법이 Weyl 가군에 적용되어 Weyl 가군의 Jantzen 여과와 합 공식이 나오고, 단순 가군의 지표 계산에 쓰인다.

[^1]: J. C. Jantzen, *Moduln mit einem höchsten Gewicht*, Lecture Notes in Math. **750**, Springer (1979). 개관은 J. E. Humphreys, *Representations of Semisimple Lie Algebras in the BGG Category O*, AMS (2008), 5 장.
[^2]: A. Beilinson, J. Bernstein, A proof of Jantzen conjectures, *Advances in Soviet Mathematics* **16** (1993), 1–50.

# 연관 문서

## 선수지식

- [범주 O](category-o.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #group_theory #combinatorics
