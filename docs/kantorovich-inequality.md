# Kantorovich 부등식

# 개요

**Kantorovich 부등식(Kantorovich inequality)** 은 양의 정부호 대칭행렬 $A$ 와 그 역행렬로 같은 벡터를 잰 두 이차형식의 곱이 $A$ 의 가장 작은 고윳값과 가장 큰 고윳값만으로 정해지는 상수를 넘지 않는다는 부등식이다. 골짜기 모양의 이차함수 $\tfrac12(x_1^2+3x_2^2)$ 를 가장 가파른 방향으로 내려가면서 걸음마다 그 방향의 최저점까지 가면 반복점이 골짜기를 가로질러 지그재그로 움직인다. 한 걸음에 함숫값이 얼마나 줄어드는지 묻는 것은 이 곱이 얼마나 클 수 있는지 묻는 것과 같다. 이 부등식은 그 곱의 최댓값이 고윳값 $1$ 과 $3$ 에서 $4/3$ 임을 보이고, 함숫값이 걸음마다 $1/4$ 배 이하로 줄어든다는 것을 준다.

# 직관

$A=\mathrm{diag}(1,3)$ 이고 $f(x)=\tfrac12x^{\mathsf T}Ax$ 라 하면 최솟값은 원점에서 $0$ 이다. $x_0=(3,1)$ 에서 [기울기 벡터](gradient.md)는 $g=Ax_0=(3,3)$ 이다. $-g$ 방향으로 $\alpha$ 만큼 가면 $f(x_0-\alpha g)=6-18\alpha+18\alpha^2$ 이므로 $\alpha=1/2$ 에서 가장 작고, $x_1=(1.5,-0.5)$ 와 $f(x_1)=1.5$ 가 나온다. 함숫값이 $6$ 에서 $1.5$ 로 $1/4$ 배가 되었다.

$x_1$ 에서 기울기는 $(1.5,-1.5)$ 이고 같은 계산으로 다시 $1/4$ 배가 된다.

한 걸음의 비율을 일반적으로 적는다. 기울기가 $g$ 이면 최적 걸음은 $\alpha=g^{\mathsf T}g/g^{\mathsf T}Ag$ 이고, $f(x)=\tfrac12g^{\mathsf T}A^{-1}g$ 이므로 다음이 나온다.

$$
\frac{f(x_1)}{f(x_0)}=1-\frac{(g^{\mathsf T}g)^2}{(g^{\mathsf T}Ag)(g^{\mathsf T}A^{-1}g)}
$$

$g=(3,3)$ 이면 $g^{\mathsf T}g=18$, $g^{\mathsf T}Ag=36$, $g^{\mathsf T}A^{-1}g=12$ 이므로 분수는 $324/432=3/4$ 이고 비율은 $1/4$ 이다. 가장 나쁜 경우를 알려면 분모의 곱 $(g^{\mathsf T}Ag)(g^{\mathsf T}A^{-1}g)$ 가 $(g^{\mathsf T}g)^2$ 의 몇 배까지 커지는지 알아야 한다.

# 정의

$A$ 가 $n\times n$ 양의 정부호 대칭행렬이고 고윳값이 모두 $\lbrack m,M\rbrack$ 에 있으며 $m\gt 0$ 이면, 모든 $x\in\mathbb R^n$ 에 대해 다음이 성립한다[^1].

$$
(x^{\mathsf T}Ax)(x^{\mathsf T}A^{-1}x)\le\frac{(M+m)^2}{4Mm}(x^{\mathsf T}x)^2
$$

직관 절의 $A$ 는 $m=1$, $M=3$ 이므로 오른쪽 상수는 $16/12=4/3$ 이다. $g=(3,3)$ 에서 왼쪽은 $432$ 이고 오른쪽은 $(4/3)\cdot 324=432$ 이므로 등호가 성립한다.

# 성질

## 증명의 요지

[스펙트럼 정리](spectral-theorem.md)로 $A$ 를 대각화하고 $x^{\mathsf T}x=1$ 로 두면 고유벡터 방향의 성분 제곱 $w_i$ 는 음이 아니고 합이 $1$ 이다. 왼쪽은 $a=\sum w_i\lambda_i$ 와 $b=\sum w_i/\lambda_i$ 의 곱이다.

$m\le\lambda\le M$ 이면 $(\lambda-m)(\lambda-M)\le 0$ 이므로 $\lambda+Mm/\lambda\le M+m$ 이다. 무게 $w_i$ 로 평균하면 $a+Mm\thinspace b\le M+m$ 이다. [산술-기하 평균 부등식](am-gm-inequality.md)에서 $2\sqrt{Mm\thinspace ab}\le a+Mm\thinspace b$ 이므로 다음이 나온다.

$$
ab\le\frac{(M+m)^2}{4Mm}
$$

## 등호 조건

등호는 $x$ 가 고윳값 $m$ 의 고유벡터와 고윳값 $M$ 의 고유벡터를 같은 크기로 섞은 것일 때 성립한다. 이때 $w$ 가 두 고윳값에 $1/2$ 씩 놓여 $a=(M+m)/2$, $b=(M+m)/(2Mm)$ 이다. 직관 절의 $g=(3,3)$ 이 그런 벡터이고, 지그재그의 기울기가 모두 이 꼴이라 걸음마다 등호가 된다.

## 확률변수 판본

양의 확률변수 $X$ 가 $\lbrack m,M\rbrack$ 에 값을 가지면 다음이 성립한다.

$$
E\lbrack X\rbrack\thinspace E\lbrack 1/X\rbrack\le\frac{(M+m)^2}{4Mm}
$$

증명의 요지에서 $w_i$ 를 $X$ 의 분포로 바꾼 것이다. 왼쪽은 [Jensen 부등식](jensen-inequality.md)에서 $1$ 이상이므로, 이 부등식은 그 반대쪽의 상한이다.

## 최급강하법의 수렴률

양의 정부호 이차함수에 정확한 선탐색을 쓴 최급강하법(steepest descent)은 걸음마다 다음을 만족한다.

$$
f(x_{k+1})-f^\ast\le\left(\frac{M-m}{M+m}\right)^2\bigl(f(x_k)-f^\ast\bigr)
$$

직관 절의 비율 식에 Kantorovich 부등식을 넣으면 $1-4Mm/(M+m)^2=((M-m)/(M+m))^2$ 이 나온다. 조건수(condition number) $\kappa=M/m$ 로 쓰면 비율은 $((\kappa-1)/(\kappa+1))^2$ 이고, 직관 절의 $\kappa=3$ 에서 $1/4$ 다. 등호 조건의 벡터에서 출발하면 이 비율이 매 걸음 그대로 나타나므로 상한은 개선되지 않는다.

# 활용

- [경사하강법](gradient-descent.md)과 [선탐색](line-search.md). 정확한 선탐색을 써도 수렴률이 조건수로 정해진다는 것이 위의 정리이고, 전처리와 [공액기울기법](conjugate-gradient.md)이 이 비율을 줄이려는 방법이다.
- 최소제곱의 효율. 오차의 공분산행렬이 $\Sigma$ 인 회귀에서 설명변수가 하나인 벡터 $x$ 이면 일반화 최소제곱(generalized least squares) 추정량의 분산을 보통 최소제곱 추정량의 분산으로 나눈 값은 $(x^{\mathsf T}x)^2/((x^{\mathsf T}\Sigma x)(x^{\mathsf T}\Sigma^{-1}x))$ 다. Kantorovich 부등식에서 이 비는 $4Mm/(M+m)^2$ 이상이다.
- 평균의 비교. 양수 $x_1,\dots,x_n$ 이 $\lbrack m,M\rbrack$ 에 있으면 산술평균을 조화평균으로 나눈 값이 $(M+m)^2/(4Mm)$ 이하다. 확률변수 판본에서 $X$ 를 $x_i$ 위의 균등분포로 둔 것이다.

[^1]: L. V. Kantorovich, "Functional analysis and applied mathematics", Uspekhi Matematicheskikh Nauk 3 (1948), 89–185.

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)
- [산술-기하 평균 부등식](am-gm-inequality.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #optimization #statistics
