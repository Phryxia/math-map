# Crofton 공식

# 개요

**Crofton 공식(Crofton formula)** 은 평면 곡선의 길이를, 그 곡선과 만나는 직선들을 교차 횟수만큼 세어 잰 양의 절반으로 적는 공식이다. 지도 위 강의 길이를 재려면 굽이마다 자를 대야 하지만, 평행선을 그은 투명지를 강 위에 여러 방향으로 놓고 강과 선이 만나는 점을 세는 것은 쉽다. Crofton 공식은 직선 전체에 회전과 평행이동으로 바뀌지 않는 측도를 주고, 이 측도로 센 교차 횟수의 적분이 길이의 두 배라는 것을 보여 세기만으로 길이를 계산하게 한다.

# 직관

길이 $\ell$ 인 선분 하나를 놓고, 이 선분과 만나는 직선이 얼마나 많은지 센다. 직선은 방향을 하나 고르면 그 방향에 수직인 축 위의 위치로 정해진다. 방향의 법선이 선분과 각 $\psi$ 를 이루면, 선분을 그 축에 정사영한 그림자의 길이가 $\ell\vert\cos\psi\vert$ 이고, 이 그림자 위의 위치를 지나는 직선만 선분과 만난다.

방향을 반 바퀴 돌리며 그림자 길이를 더하면 $\int_0^\pi\ell\vert\cos\psi\vert\thinspace d\psi=2\ell$ 이다. 선분과 만나는 직선의 양이 길이의 두 배다.

꺾은선은 선분 여러 개로 되어 있다. 직선 하나가 꺾은선과 만나는 횟수는 각 선분과 만나는 횟수의 합이므로, 교차 횟수를 직선 전체에 대해 더한 값은 선분마다 얻은 $2\ell$ 의 합, 곧 꺾은선 길이의 두 배다. 곡선은 꺾은선으로 근사되므로 같은 등식이 곡선에서도 성립한다.

# 정의

## 직선의 측도

평면의 직선은 다음 꼴로 쓴다. $\varphi\in\lbrack 0,\pi)$ 는 법선의 각이고 $p\in\mathbb R$ 는 원점에서 직선까지의 부호 있는 거리다.

$$
L_{p,\varphi}=\lbrace (x,y): x\cos\varphi+y\sin\varphi=p\rbrace
$$

직선의 집합 $E$ 에 대해 $\mu(E)=\iint_E dp\thinspace d\varphi$ 로 정한 측도를 **직선의 불변 측도(invariant measure on lines)** 라 한다. 평면을 회전하거나 평행이동하면 $(p,\varphi)$ 가 $\varphi$ 의 평행이동과 $p$ 의 평행이동으로 바뀌므로 $\mu$ 는 그대로다. 반지름 $r$ 인 원판과 만나는 직선은 $\vert p-p_0(\varphi)\vert\le r$ 인 것이므로, 그 측도는 $2r\cdot\pi=2\pi r$ 로 원의 둘레와 같다.

## Crofton 공식

$C$ 가 길이 $L$ 인 정류 곡선(rectifiable curve)이고 $n_C(p,\varphi)$ 가 직선 $L_{p,\varphi}$ 와 $C$ 의 교점의 수라 하자. **Crofton 공식** 은 다음 등식이다.[^1]

$$
\int_0^\pi\int_{-\infty}^\infty n_C(p,\varphi)\thinspace dp\thinspace d\varphi=2L
$$

M. W. Crofton 이 1868 년에 발표했다. 직관 절의 선분에서 $n_C$ 는 그림자 위에서 $1$, 그 밖에서 $0$ 이므로 좌변이 $2\ell$ 이다.

# 성질

## 볼록 곡선과 Cauchy 공식

볼록집합 $K$ 의 경계는 $K$ 의 내부를 지나는 직선과 정확히 두 번 만나고, 경계에 접하는 직선의 측도는 $0$ 이다. $K$ 와 만나는 직선의 집합을 $E_K$ 라 하면, Crofton 공식은 그 측도가 둘레 $L$ 이라는 것을 준다.

$$
\mu(E_K)=L
$$

방향 $\varphi$ 에서 $K$ 와 만나는 직선의 $p$ 는 길이가 너비 $w_K(\varphi)$ 인 구간을 이루므로 둘레는 $\int_0^\pi w_K(\varphi)\thinspace d\varphi$ 다. 이것이 Cauchy 공식(Cauchy's formula)이고, [너비가 일정한 곡선](curves-of-constant-width.md)의 둘레가 $\pi w$ 인 것은 그 특수한 경우다.

## 무작위 직선이 안쪽 집합을 맞힐 확률

볼록집합 $K'\subset K$ 에 대해, $K$ 와 만나는 직선을 측도 $\mu$ 에 따라 고르면 그 직선이 $K'$ 와도 만날 확률은 둘레의 비다.

$$
\frac{\mu(E_{K'})}{\mu(E_K)}=\frac{L(K')}{L(K)}
$$

$K$ 가 반지름 $1$ 인 원판이고 $K'$ 가 같은 중심의 반지름 $1/2$ 인 원판이면 확률은 $1/2$ 이다. [Bertrand 역설](bertrand-paradox.md)에서 불변 측도로 고른 현이 내접 정삼각형의 변보다 길 확률이 이 값이다.

## Buffon 의 국수

간격 $d$ 의 평행선 묶음을 무작위로 놓는 것은 방향 $\varphi$ 를 고르게, 평행선 하나의 위치를 길이 $d$ 의 구간에서 고르게 뽑는 것이다. 이때 곡선과의 교차 횟수의 기댓값은 Crofton 공식의 좌변을 $\pi d$ 로 나눈 값이므로 $2L/(\pi d)$ 다. [Buffon 의 바늘 문제](buffons-needle.md)의 교차 횟수 공식이 이렇게 나온다.

## Poincaré 공식

곡선 $C_1$ 을 고정하고 곡선 $C_2$ 를 평면의 강체운동 $g$ 로 옮길 때, 교점의 수를 강체운동 전체에 대해 적분하면 두 길이의 곱에 비례한다. 강체운동의 측도를 평행이동 성분의 넓이와 회전각의 곱 $dx\thinspace dy\thinspace d\theta$ 로 잡으면 다음이 성립한다.[^1]

$$
\int n(C_1\cap gC_2)\thinspace dg=4L_1L_2
$$

$C_2$ 를 아주 긴 선분으로 잡으면 Crofton 공식이 나온다.

# 활용

- 곡선 길이의 측정. 간격 $d$ 의 평행선을 그은 투명지를 여러 방향으로 곡선 위에 놓고 교점 수의 평균 $\bar n$ 을 내면, 길이의 추정값은 $\pi d\bar n/2$ 다. H. Steinhaus 가 이 도구를 지도 위의 길이 측정에 썼다.
- 입체계측학(stereology). 조직 단면이나 재료 단면에 시험선을 그어 경계와의 교점을 세면, 단면 위 경계 곡선의 길이가 위 추정식으로 나온다. 같은 원리를 공간으로 넓힌 공식이 단면 측정에서 표면적을 추정하는 데 쓰인다.
- [내재부피](intrinsic-volumes.md). Crofton 공식은 고차원에서 볼록집합과 만나는 아핀 부분공간의 측도가 내재부피라는 공식으로 넓어지고, 평면의 둘레는 내재부피 $V_1$ 의 두 배다.
- [곡선의 길이](arc-length.md). 길이를 꺾은선 길이의 상한으로 정의하는 대신 교차 횟수의 적분으로 정의할 수 있고, 정류 곡선에서는 두 정의가 일치한다.

[^1]: L. A. Santaló, *Integral Geometry and Geometric Probability*, 2nd ed., Cambridge University Press (2004), 1 장과 3 장. Crofton 의 원 논문은 M. W. Crofton, "On the theory of local probability", *Philosophical Transactions of the Royal Society of London* **158** (1868), 181–199.

# 연관 문서

## 선수지식

- [곡선의 길이](arc-length.md)
- [Buffon 의 바늘 문제](buffons-needle.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #probability #differential_geometry
