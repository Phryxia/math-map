# Nyström 법

# 개요

**Nyström 법(Nyström method)** 은 적분이 들어간 방정식에서 적분을 유한 개 점의 가중합으로 바꾸어 연립일차방정식으로 푸는 방법이다. 길이 $1$ 인 막대의 각 점 온도가 다른 모든 점의 온도를 거리에 따라 가중해 적분한 값과 외부 열원의 합이라면, 온도 $u$ 는 $u(x)-\int_0^1 K(x,y)u(y)\thinspace dy=f(x)$ 를 만족한다. 적분을 점 열 개의 값에 가중치를 곱해 더한 것으로 바꾸면, 그 열 점의 온도가 미지수 열 개의 연립일차방정식으로 정해진다. 이 방정식의 해를 원래 식에 다시 넣으면 막대 전체의 근사해가 나오고, 오차는 가중합이 적분을 근사하는 오차만큼 줄어든다.

# 직관

Nyström 법은 제2종 Fredholm 적분방정식의 적분을 구적 공식으로 바꾸어, 구적 마디에서의 값에 대한 연립일차방정식으로 푸는 방법이다. 마디에서 구한 값을 원래 방정식에 다시 넣는 Nyström 보간이 구간 전체의 근사해를 준다.

근사해의 오차는 구적 공식이 $y\mapsto K(x,y)u(y)$ 를 적분하는 오차와 같은 차수로 줄어든다. 근사 작용소들이 집단적으로 콤팩트하다는 Anselone 의 조건이 수렴의 근거다.

다음 방정식을 푼다.

$$
u(x)-\int_0^1 xy\thinspace u(y)\thinspace dy=x,\qquad 0\le x\le 1
$$

적분이 $x$ 곱하기 상수이므로 $u(x)=x(1+c)$ 꼴이고, $c=\int_0^1 y\thinspace u(y)\thinspace dy=(1+c)/3$ 에서 $c=1/2$ 이다. 해는 $u(x)=3x/2$ 다.

적분을 손으로 풀 수 없는 핵에서도 같은 일을 하려고 적분을 마디 두 개의 [Gauss 구적](gaussian-quadrature.md)으로 바꾼다. 마디는 $t\_{1,2}=\tfrac12\mp\tfrac{1}{2\sqrt3}$, 무게는 둘 다 $\tfrac12$ 다. 방정식을 두 마디에서만 쓰면 미지수 $u_1=u(t_1)$, $u_2=u(t_2)$ 의 연립방정식이 된다.

$$
u_i-\sum_{j=1}^{2}\tfrac12\thinspace t_it_j\thinspace u_j=t_i,\qquad i=1,2
$$

이 연립방정식을 풀면 $u_i=3t_i/2$ 이다. 마디 밖의 $x$ 에서는 원래 방정식의 적분 자리에 같은 합을 넣어 $u(x)=x+\sum_j\tfrac12\thinspace xt_j\thinspace u_j=3x/2$ 를 얻는다. 피적분함수 $y\cdot\tfrac32 y$ 가 이차식이고 두 마디 Gauss 구적은 삼차식까지 정확하므로 근사해가 참해와 같다. 피적분함수가 다항식이 아니면 근사해의 오차가 구적 오차만큼 남는다.

# 정의

## 제2종 적분방정식

$K$ 를 $\lbrack a,b\rbrack^2$ 위의 연속함수, $f$ 를 $\lbrack a,b\rbrack$ 위의 연속함수라 한다. 다음이 **제2종 Fredholm 적분방정식(Fredholm integral equation of the second kind)** 이다.

$$
u(x)-\int_a^b K(x,y)u(y)\thinspace dy=f(x)
$$

적분 부분을 $C\lbrack a,b\rbrack$ 위의 작용소 $(\mathcal Ku)(x)=\int_a^bK(x,y)u(y)\thinspace dy$ 로 쓰면 방정식은 $(I-\mathcal K)u=f$ 이고, $\mathcal K$ 는 [콤팩트 작용소](compact-operators.md)다.

## Nyström 근사

마디 $t_1,\dots,t_n\in\lbrack a,b\rbrack$ 와 무게 $w_1,\dots,w_n$ 의 구적 공식을 잡는다. 적분을 구적 합으로 바꾼 작용소가 **Nyström 근사 작용소** 다.

$$
(\mathcal K_nu)(x)=\sum_{j=1}^nw_jK(x,t_j)u(t_j)
$$

근사 방정식 $(I-\mathcal K_n)u_n=f$ 를 마디에서 쓰면 $n\times n$ 연립방정식이 된다.

$$
u_n(t_i)-\sum_{j=1}^nw_jK(t_i,t_j)u_n(t_j)=f(t_i),\qquad i=1,\dots,n
$$

그 해로 정한 함수

$$
u_n(x)=f(x)+\sum_{j=1}^nw_jK(x,t_j)u_n(t_j)
$$

가 **Nyström 보간(Nyström interpolation)** 이다. $u_n$ 은 마디에서 연립방정식의 해와 같고 구간 전체에서 근사 방정식을 만족한다.

## 집단 콤팩트성

$C\lbrack a,b\rbrack$ 위의 작용소족 $\lbrace\mathcal K_n\rbrace$ 이 **집단 콤팩트(collectively compact)** 하다는 것은 집합 $\lbrace\mathcal K_nu:n\ge 1,\thinspace\Vert u\Vert\le 1\rbrace$ 이 상대콤팩트라는 뜻이다.

# 성질

## 수렴 정리

구적 공식이 모든 연속함수에서 수렴하면 $\mathcal K_n$ 은 $\mathcal K$ 로 점별 수렴하고, $K$ 의 균등연속성에서 $\lbrace\mathcal K_n\rbrace$ 이 집단 콤팩트다. Nyström 근사 작용소는 노름으로는 수렴하지 않는다. $\Vert\mathcal K-\mathcal K_n\Vert$ 는 마디에서 크고 다른 곳에서 작은 함수를 넣으면 줄지 않는다.

> **정리 (Anselone).** $I-\mathcal K$ 가 가역이고 $\mathcal K_n$ 이 점별 수렴하는 집단 콤팩트 족이면, 충분히 큰 $n$ 에서 $I-\mathcal K_n$ 이 가역이고 $\Vert(I-\mathcal K_n)^{-1}\Vert$ 가 $n$ 에 대해 유계이며, 어떤 상수 $C$ 에 대해 다음이 성립한다[^1].

$$
\Vert u-u_n\Vert\_\infty\le C\thinspace\Vert(\mathcal K-\mathcal K_n)u\Vert\_\infty
$$

증명의 요지. 점별 수렴은 상대콤팩트 집합 위에서 균등 수렴이 되므로, 집단 콤팩트성에서 $(\mathcal K-\mathcal K_n)\mathcal K_n$ 이 노름으로 $0$ 에 간다. 그래서 $(I-\mathcal K)^{-1}$ 을 써서 만든 $I-\mathcal K_n$ 의 근사 역이 Neumann 급수로 고쳐진다. 오차식은 $u-u_n=(I-\mathcal K_n)^{-1}(\mathcal K-\mathcal K_n)u$ 에서 바로 나온다.

## 수렴 속도

우변 $(\mathcal K-\mathcal K_n)u$ 는 각 $x$ 에서 함수 $y\mapsto K(x,y)u(y)$ 의 구적 오차다. 그래서 수렴 속도는 구적 공식이 그 함수에서 내는 속도와 같다.

- 사다리꼴 규칙과 매끄러운 피적분함수에서는 $O(n^{-2})$ 다. 주기함수에서는 사다리꼴 규칙의 오차가 지수적으로 준다.
- $K$ 와 $f$ 가 $\lbrack a,b\rbrack$ 를 포함하는 복소 영역에서 해석적이면 해 $u$ 도 해석적이고, Gauss 구적을 쓰면 오차가 어떤 $\rho\gt 1$ 에 대해 $O(\rho^{-2n})$ 이다.

Galerkin 법은 해를 기저함수의 일차결합으로 놓고 적분을 두 번 계산해야 한다. Nyström 법은 핵의 값 $K(t_i,t_j)$ 만 쓰므로 행렬을 만드는 비용이 마디 수의 제곱이다.

# 활용

- **Fredholm 행렬식의 계산.** [Fredholm 행렬식](fredholm-determinant.md) $\det(I-\mathcal K)$ 를 행렬식 $\det(\delta_{ij}-w_jK(t_i,t_j))$ 로 근사한다. Bornemann 은 이 근사가 해석적 핵과 Gauss 구적에서 지수적으로 수렴함을 보였다[^2]. [Tracy–Widom 분포](tracy-widom.md)의 수치 계산이 이 방법이다.
- **고유값 문제.** $\mathcal K\phi=\lambda\phi$ 의 고유값을 행렬 $(w_jK(t_i,t_j))$ 의 고유값으로 근사한다. 집단 콤팩트성에서 고립된 고유값과 그 고유공간이 수렴한다.
- **커널 행렬의 저계수 근사.** [커널 PCA](kernel-pca.md)(principal component analysis)에서 표본 $m$ 개로 만든 작은 커널 행렬의 고유벡터를 Nyström 보간과 같은 식으로 나머지 표본에 늘려 큰 커널 행렬의 저계수 근사를 얻는다. 이것도 Nyström 근사라 부른다.

[^1]: P. M. Anselone, *Collectively Compact Operator Approximation Theory and Applications to Integral Equations*, Prentice-Hall (1971). K. E. Atkinson, *The Numerical Solution of Integral Equations of the Second Kind*, Cambridge University Press (1997), Ch. 4.
[^2]: F. Bornemann, *On the numerical evaluation of Fredholm determinants*, Math. Comp. 79 (2010), 871–915.

# 연관 문서

## 선수지식

- [콤팩트 작용소](compact-operators.md)
- [Gauss 구적](gaussian-quadrature.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #algorithms #analysis
