# Cheeger 부등식

# 개요

**Cheeger 부등식(Cheeger's inequality)** 은 닫힌 Riemann 다양체에서 [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)의 $0$ 이 아닌 첫 고윳값 $\lambda_1$ 이 Cheeger 상수 $h$ 의 제곱의 $1/4$ 이상이라는 부등식이다.

$$
\lambda_1\ge\frac{h^2}{4}
$$

$h$ 는 다양체를 두 조각으로 자르는 데 드는 넓이를 작은 조각의 부피로 나눈 값의 하한이다. J. Cheeger 가 1970 년에 증명했다[^1].

# 직관

반지름 $1$ 인 구면 두 개를 길이 $1$, 굵기 $\varepsilon$ 인 관으로 이은 아령 모양 곡면을 생각한다. 한쪽 구면에서 $1$, 다른 쪽에서 $-1$ 이고 관을 따라 $1$ 에서 $-1$ 로 고르게 바뀌는 함수 $f$ 를 잡는다. 기울기는 관 위에서만 $0$ 이 아니고 그 크기는 $2$ 정도이며 관의 넓이는 $\varepsilon$ 에 비례하므로, $\int\Vert\nabla f\Vert^2$ 은 $\varepsilon$ 규모다. $\int f^2$ 은 두 구면의 넓이로 $8\pi$ 근처이고, $f$ 의 평균은 $0$ 이다.

$\lambda_1$ 은 평균이 $0$ 인 함수의 $\int\Vert\nabla f\Vert^2/\int f^2$ 의 최솟값이므로 $\varepsilon$ 규모 이하다. 관이 가늘수록 $\lambda_1$ 이 $0$ 에 가깝다. 관의 가운데를 자르면 자른 곳의 길이가 $\varepsilon$ 규모이고 양쪽 넓이가 $4\pi$ 근처이므로 $h$ 도 $\varepsilon$ 규모로 작다. Cheeger 부등식은 반대 방향을 말한다. $h$ 가 작지 않으면, 곧 다양체에 가는 목이 없으면 $\lambda_1$ 도 작을 수 없다.

# 정의

$(M,g)$ 를 닫힌 $n$ 차원 Riemann 다양체라 한다. 매끄러운 초곡면 $S$ 가 $M$ 을 열린집합 $A$, $B$ 로 나누면

$$
h(M)=\inf_S\frac{\mathrm{area}(S)}{\min\bigl(\mathrm{vol}(A),\mathrm{vol}(B)\bigr)}
$$

로 둔다. 이것을 **Cheeger 상수(Cheeger constant)** 라 한다. 경계가 있는 영역의 [Dirichlet 문제](dirichlet-problem.md)에서는 $\Omega$ 안의 부분영역 $D$ 에 대해 $\mathrm{area}(\partial D)/\mathrm{vol}(D)$ 의 하한을 쓴다.

$\lambda_1(M)$ 은 $\int_Mf=0$ 인 $f\in H^1(M)$ 에 걸친 Rayleigh 몫 $\int\Vert\nabla f\Vert^2/\int f^2$ 의 최솟값이다.

# 성질

## Cheeger 부등식의 증명

$f$ 를 $\lambda_1$ 의 고유함수라 하고, $f$ 에 상수를 더하지 않은 채 부호를 골라 $\mathrm{vol}\lbrace f\gt 0\rbrace\le\mathrm{vol}(M)/2$ 가 되게 한다. $f_+=\max(f,0)$, $u=f_+^2$ 이라 한다.

[면적공식](area-formula.md)의 여면적공식으로

$$
\int_M\Vert\nabla u\Vert=\int_0^\infty\mathrm{area}\lbrace u=t\rbrace\thinspace dt\ge h\int_0^\infty\mathrm{vol}\lbrace u\gt t\rbrace\thinspace dt=h\int_Mu
$$

다. 부등식에서는 $\lbrace u\gt t\rbrace$ 의 부피가 전체의 절반 이하라서 작은 쪽 조각이 그것이라는 점을 썼다. 왼쪽은 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로

$$
\int\Vert\nabla u\Vert=2\int f_+\Vert\nabla f_+\Vert\le 2\Bigl(\int f_+^2\Bigr)^{1/2}\Bigl(\int\Vert\nabla f_+\Vert^2\Bigr)^{1/2}
$$

이다. $\lbrace f\gt 0\rbrace$ 에서 Green 공식을 쓰면 $\int\Vert\nabla f_+\Vert^2=\lambda_1\int f_+^2$ 이므로 $h\int f_+^2\le 2\sqrt{\lambda_1}\int f_+^2$ 이고, $\lambda_1\ge h^2/4$ 가 나온다.

## Buser 부등식

역방향은 곡률 조건 아래에서 성립한다. Ricci 곡률이 $-(n-1)K$ 이상 $(K\ge 0)$ 이면

$$
\lambda_1\le C_n\bigl(\sqrt K\thinspace h+h^2\bigr)
$$

이고 $C_n$ 은 차원만의 상수다. 이것이 Buser 부등식(Buser's inequality)이다[^2].

# 활용

- [Expander 그래프](expander-graphs.md)의 Cheeger 부등식은 같은 증명을 그래프의 전도도와 [그래프 Laplacian](graph-laplacian.md)의 둘째 고윳값으로 옮긴 것이다.
- [Hodge 이론](hodge-theory.md)에서 함수 위의 $\lambda_1$ 이 다양체가 잘록한 정도로 아래에서 막힌다.
- 첫 고윳값은 [열방정식](heat-equation.md)의 해가 평균값으로 가는 속도 $e^{-\lambda_1t}$ 를 정하므로, $h$ 가 그 속도의 하한을 준다.

[^1]: J. Cheeger, "A lower bound for the smallest eigenvalue of the Laplacian", in *Problems in Analysis*, Princeton Univ. Press, 1970, 195–199.
[^2]: P. Buser, "A note on the isoperimetric constant", Ann. Sci. Éc. Norm. Supér. 15 (1982), 213–230.

# 연관 문서

## 선수지식

- [Laplace–Beltrami 연산자](laplace-beltrami-operator.md)
- [등주부등식](isoperimetric-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #graph_theory
