# 면적공식

# 개요

**면적공식(area formula)** 은 사상이 집합을 옮긴 상의 넓이를 사상의 미분으로 계산하는 등식이다. 평면의 원판을 공간 속 곡면으로 보내는 사상처럼 차원이 낮은 곳에서 높은 곳으로 가는 사상은, 상의 3차원 부피가 $0$ 이라 부피로는 상의 넓이를 잴 수 없다. 면적공식은 상의 크기를 Hausdorff 측도로 재고, 그 값이 Jacobi 행렬식의 적분과 같음을 매끄럽지 않은 [Lipschitz 사상](lipschitz-maps.md)까지 보인다.

# 직관

면적공식은 Lipschitz 사상이 집합을 보낸 상의 크기를 Jacobi 행렬식의 적분으로 재는 등식이다. 정의역의 차원이 공역의 차원보다 작아 상이 Lebesgue 영집합일 때도 성립하고, 상의 크기를 [Hausdorff 차원](hausdorff-dimension.md) 쪽 $n$ 차원 Hausdorff 측도로 잰다.

사상의 미분가능성은 가정하지 않는다. 거의 모든 점에서 미분가능하다는 [Rademacher 정리](rademacher-theorem.md)가 Jacobi 행렬식을 거의 어디서나 정의해 준다.

치환적분 $\int\_a^b g(\varphi(x))\varphi'(x)\thinspace dx=\int\_{\varphi(a)}^{\varphi(b)}g(y)\thinspace dy$ 에서 $g=1$ 로 두면 왼쪽이 상의 길이가 된다. $\varphi(x)=x^2$ 를 $A=\lbrack -1,1\rbrack$ 에서 보고 왼쪽을 계산한다. 도함수의 절댓값을 적분하면

$$
\int\_{-1}^{1}\vert\varphi'(x)\vert\thinspace dx=\int\_{-1}^{1}2\vert x\vert\thinspace dx=2
$$

이다. 그런데 상 $\varphi(A)=\lbrack 0,1\rbrack$ 의 길이는 $1$ 이다. 두 값이 다르다.

$y\in(0,1)$ 의 원상은 $-\sqrt{y}$ 와 $\sqrt{y}$ 두 점이다. 적분이 상의 길이보다 정확히 두 배인 것은 상의 각 점을 원상의 개수만큼 거듭 센 것이다. 그러면 등식은 상의 크기가 아니라 원상의 개수를 적분한 것과 맞춰야 한다.

$$
\int\_A\vert\varphi'(x)\vert\thinspace dx=\int\_{\mathbb{R}}\char35{}\bigl(A\cap\varphi^{-1}(y)\bigr)\thinspace dy
$$

오른쪽은 $(0,1)$ 에서 피적분함수가 $2$ 이고 밖에서 $0$ 이므로 $2$ 다. 사상이 단사이면 개수가 $1$ 이라 오른쪽이 상의 길이로 돌아온다.

정의역이 $\mathbb{R}^n$ 이고 공역이 $\mathbb{R}^m$ 이면서 $n\lt m$ 이면 상이 Lebesgue 영집합이므로 오른쪽을 $dy$ 로 잴 수 없다. 길이나 면적에 해당하는 $n$ 차원 크기로 바꿔 재야 하고, 그 자리에 $n$ 차원 Hausdorff 측도가 들어간다. 왼쪽의 $\vert\varphi'\vert$ 자리에는 접공간이 늘어나는 비율을 재는 Jacobi 행렬식이 들어간다.

# 정의

## Jacobi 행렬식

$f:\mathbb{R}^n\to\mathbb{R}^m$ 이 $x$ 에서 미분가능하고 $n\le m$ 일 때, $Df(x)$ 는 $m\times n$ 행렬이다. $f$ 의 **Jacobi 행렬식**은

$$
Jf(x)=\sqrt{\det\bigl(Df(x)^{\mathsf{T}}Df(x)\bigr)}
$$

이다. $Df(x)^{\mathsf{T}}Df(x)$ 는 $n\times n$ 양반정치 행렬이므로 행렬식이 음수가 아니다. $n=m$ 이면 $Jf(x)=\vert\det Df(x)\vert$ 이고, $Df(x)$ 가 보내는 단위입방체의 상의 $n$ 차원 크기가 $Jf(x)$ 다.

## 면적공식

정리. $f:\mathbb{R}^n\to\mathbb{R}^m$ 이 Lipschitz 이고 $n\le m$ 이면, Lebesgue 가측집합 $A\subseteq\mathbb{R}^n$ 에서 다음이 성립한다[^1].

$$
\int\_A Jf(x)\thinspace dx=\int\_{\mathbb{R}^m}\char35{}\bigl(A\cap f^{-1}(y)\bigr)\thinspace d\mathcal{H}^n(y)
$$

$\mathcal{H}^n$ 은 $n$ 차원 Hausdorff 측도이고 $\char35{}$ 는 원소의 개수다. 오른쪽의 피적분함수는 $\mathcal{H}^n$ 가측이고 값이 $+\infty$ 일 수 있다.

# 성질

## 단사인 경우

$f$ 가 $A$ 에서 단사이면 원상의 개수가 $A$ 의 상에서 $1$ 이고 밖에서 $0$ 이므로 오른쪽이 $\mathcal{H}^n(f(A))$ 다.

$$
\mathcal{H}^n(f(A))=\int\_A Jf(x)\thinspace dx
$$

$f$ 가 $C^1$ 단사 매개화이면 이 식이 곡면의 면적을 매개변수 적분으로 쓴 공식이다. $m=n$ 에서는 치환적분의 Jacobi 인자가 된다.

## 증명의 요지

세 단계다. 먼저 선형사상 $L:\mathbb{R}^n\to\mathbb{R}^m$ 에서 $\mathcal{H}^n(L(E))=JL\cdot\lvert E\rvert$ 를 보인다. $\lvert E\rvert$ 는 $E$ 의 Lebesgue 측도다. 극분해로 $L$ 을 등거리와 양반정치 대칭행렬의 곱으로 쪼개면 등거리는 Hausdorff 측도를 보존하고 대칭 부분은 고윳값의 곱만큼 늘린다. 다음으로 Rademacher 정리가 주는 미분가능한 점들을 $Jf\gt 0$ 인 자리에서 가산 개 조각으로 나누어, 각 조각에서 $f$ 가 단사이고 아핀 사상 $x\mapsto f(a)+Df(a)(x-a)$ 와 $(1+\varepsilon)$ 비율 안에서 일치하게 만든다. 끝으로 조각마다 선형 경우의 등식을 쓰고 더한 뒤 $\varepsilon\to 0$ 을 취한다. $Jf=0$ 인 자리는 양쪽이 모두 $0$ 임을 따로 보인다.

## 적분꼴

$g:\mathbb{R}^n\to\lbrack 0,\infty\rbrack$ 이 Lebesgue 가측이면 다음이 성립한다[^1].

$$
\int\_{\mathbb{R}^n}g(x)Jf(x)\thinspace dx=\int\_{\mathbb{R}^m}\Bigl(\sum\_{x\in f^{-1}(y)}g(x)\Bigr)\thinspace d\mathcal{H}^n(y)
$$

$g$ 를 $A$ 의 지시함수로 두면 면적공식이 된다. 증명은 지시함수에서 단순함수로, 단순함수에서 단조수렴정리로 올리는 표준 절차다.

## 여면적공식

정리. $f:\mathbb{R}^n\to\mathbb{R}^m$ 이 Lipschitz 이고 $n\ge m$ 이면, Lebesgue 가측집합 $A$ 에서 다음이 성립한다[^2].

$$
\int\_A J^\ast f(x)\thinspace dx=\int\_{\mathbb{R}^m}\mathcal{H}^{n-m}\bigl(A\cap f^{-1}(y)\bigr)\thinspace dy
$$

여기서 $J^\ast f(x)=\sqrt{\det\bigl(Df(x)Df(x)^{\mathsf{T}}\bigr)}$ 다. 차원이 내려가는 사상이라 원상이 점이 아니라 $n-m$ 차원 집합이고, 개수를 세는 자리에 그 집합의 Hausdorff 측도가 들어간다. $f$ 가 좌표사영이면 $J^\ast f=1$ 이고 이 식이 Fubini 정리다.

# 활용

- 곡면적과 다양체 위의 적분. 단사 매개화에서 얻은 $\mathcal{H}^n(f(A))=\int\_A Jf$ 가 [다양체](manifolds.md) 위 적분의 국소 정의이고, 좌표계를 바꿀 때 값이 변하지 않는 근거가 $m=n$ 경우의 치환적분이다.
- 구면좌표의 반지름 분해. $f(x)=\Vert x\Vert$ 에 여면적공식을 쓰면 $J^\ast f=1$ 이고 원상이 반지름 $r$ 인 공의 경계 $\partial B\_r$ 이므로 $\int\_{\mathbb{R}^n}g=\int\_0^\infty\int\_{\partial B\_r}g\thinspace d\mathcal{H}^{n-1}dr$ 가 나온다.
- 등주부등식과 Sobolev 부등식. 여면적공식이 함수의 기울기 적분을 수준집합의 $(n-1)$ 차원 크기의 적분으로 바꾸므로, 수준집합마다 [등주부등식](isoperimetric-inequality.md)을 쓰고 다시 적분해 함수 부등식을 얻는다.
- rectifiable 집합의 크기. Lipschitz 사상의 상들의 가산 합집합으로 덮이는 집합에서 이 공식이 크기를 계산하는 수단이고, 기하측도론의 곡면 면적 정의가 이 꼴이다.

[^1]: L. C. Evans and R. F. Gariepy, *Measure Theory and Fine Properties of Functions*, 개정판, CRC Press, 2015, 3.3 절.
[^2]: L. C. Evans and R. F. Gariepy, *Measure Theory and Fine Properties of Functions*, 개정판, CRC Press, 2015, 3.4 절.

# 연관 문서

## 선수지식

- [Hausdorff 차원](hausdorff-dimension.md)
- [Rademacher 정리](rademacher-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #analysis #differential_geometry
