# Laplace–Runge–Lenz 벡터

# 개요

**Laplace–Runge–Lenz 벡터(Laplace–Runge–Lenz vector)** 는 역제곱 힘을 받아 움직이는 점에서 시간이 지나도 바뀌지 않는 벡터로, 궤도의 근일점 방향을 가리키고 길이가 이심률에 비례한다. 행성의 위치와 속도는 매 순간 바뀌지만, 이 둘로 만든 이 벡터는 한 바퀴를 돌아도 같은 값이다. 운동방정식을 풀지 않고 이 벡터와 위치의 내적 하나로 궤도가 원뿔곡선이라는 것이 나온다.

# 직관

[Kepler 법칙](kepler-laws.md)에서는 $u=1/r$ 의 미분방정식을 풀어 궤도 $r=\ell/(1+e\cos\theta)$ 를 얻었다. 그 결과에서 거꾸로, 근일점에서 위치와 속도가 어떤 값인지 본다.

근일점에서 행성은 태양에서 거리 $r\_p=\ell/(1+e)$ 에 있고 속도는 위치에 수직이며 크기는 $h/r\_p$ 다. $h=r^2\theta'$ 는 면적 속도의 두 배다. 속도와 각운동량 벡터 $\mathbf L$ 의 [벡터곱](cross-product.md)은 위치와 같은 방향이고 길이가 $h^2/r\_p$ 다. 여기서 위치 방향의 단위벡터에 $GM$ 을 곱한 것을 빼면 다음이 남는다.

$$
\left(\frac{h^2}{r_p}-GM\right)\hat{\mathbf x}=GM\left(\frac{\ell}{r_p}-1\right)\hat{\mathbf x}=GMe\thinspace\hat{\mathbf x}
$$

$\ell=h^2/(GM)$ 을 썼다. 같은 식을 궤도의 다른 점에서 계산해도 같은 벡터가 나온다. 이 벡터가 처음부터 바뀌지 않는다는 것을 보이면, 미분방정식을 풀지 않고 궤도를 얻는다.

# 정의

Kepler 법칙 문서의 Kepler 문제 $\mathbf x''=-GM\mathbf x/\vert\mathbf x\vert^3$ 의 해에서 $\mathbf v=\mathbf x'$, $r=\vert\mathbf x\vert$, 각운동량 $\mathbf L=\mathbf x\times\mathbf v$ 로 둔다. **Laplace–Runge–Lenz 벡터** 는 다음 벡터다.

$$
\mathbf A=\mathbf v\times\mathbf L-GM\frac{\mathbf x}{r}
$$

직관 절의 계산은 근일점에서 $\mathbf A=GMe\thinspace\hat{\mathbf x}$ 임을 보인 것이다. 원 궤도에서는 $\vert\mathbf v\vert^2=GM/r$ 이고 $\mathbf v\times\mathbf L$ 이 바깥 방향의 길이 $GM$ 인 벡터라 $\mathbf A=\mathbf 0$ 이다.

# 성질

## 보존

$\mathbf L$ 은 $\mathbf L'=\mathbf v\times\mathbf v+\mathbf x\times\mathbf x''=\mathbf 0$ 이므로 상수다. $\mathbf A$ 를 미분하면 첫 항은 다음이다.

$$
(\mathbf v\times\mathbf L)'=\mathbf x''\times\mathbf L=-\frac{GM}{r^3}\thinspace\mathbf x\times(\mathbf x\times\mathbf v)=-\frac{GM}{r^3}\bigl((\mathbf x\cdot\mathbf v)\mathbf x-r^2\mathbf v\bigr)
$$

$\mathbf x\cdot\mathbf v=rr'$ 이므로 이것은 $GM\mathbf v/r-GMr'\mathbf x/r^2$ 이고, $GM\mathbf x/r$ 의 도함수와 같다. 따라서 $\mathbf A'=\mathbf 0$ 이다.

## 궤도 방정식

$\mathbf A$ 와 $\mathbf x$ 의 사이각을 $\theta$ 라 한다. 스칼라 삼중곱으로 $\mathbf x\cdot(\mathbf v\times\mathbf L)=(\mathbf x\times\mathbf v)\cdot\mathbf L=h^2$ 이므로 다음이 성립한다.

$$
r\vert\mathbf A\vert\cos\theta=\mathbf x\cdot\mathbf A=h^2-GMr
$$

$r$ 에 대해 풀면 $r=\ell/(1+e\cos\theta)$, $e=\vert\mathbf A\vert/(GM)$ 이다. 궤도는 원점을 초점으로 하고 이심률이 $e$ 인 [원뿔곡선](conic-sections.md)이고, $\mathbf A$ 는 $\theta=0$, 곧 원점에 가장 가까운 점의 방향을 가리킨다.

## 에너지와의 관계

에너지 $E=\frac12\vert\mathbf v\vert^2-GM/r$ 도 보존된다. $\mathbf v\perp\mathbf L$ 이므로 $\vert\mathbf v\times\mathbf L\vert=\vert\mathbf v\vert h$ 이고, $\vert\mathbf A\vert^2$ 을 전개해 정리하면 다음이 나온다.

$$
\vert\mathbf A\vert^2=G^2M^2+2Eh^2
$$

$E\lt 0$ 이면 $e\lt 1$ 이라 궤도가 타원이고, $E=0$ 이면 포물선, $E\gt 0$ 이면 쌍곡선이다.

## 닫힌 궤도

$\mathbf A$ 가 상수이므로 근일점의 방향이 바뀌지 않고, 묶인 궤도는 한 바퀴 돌아 닫힌다. 힘이 역제곱에서 조금 벗어나면 $\mathbf A$ 가 천천히 돌고, 그 회전이 [Bertrand 정리](bertrand-orbit-theorem.md)의 근일점 이동이다.

# 활용

- Bertrand 정리의 근일점 이동 계산. 역제곱 힘에 작은 힘 $\delta\mathbf f$ 가 더해지면 $\mathbf A'=\delta\mathbf f\times\mathbf L+\mathbf v\times(\mathbf x\times\delta\mathbf f)$ 이고, 이것을 한 바퀴 평균하면 근일점이 도는 빠르기가 나온다.
- [Noether 정리](noether-theorem.md)의 대칭. $\mathbf L$ 과 $\mathbf A$ 가 함께 보존된다는 것은 Kepler 문제가 회전보다 큰 대칭을 가진다는 것이다. 묶인 궤도에서 $\mathbf L$ 과 적당히 크기를 맞춘 $\mathbf A$ 의 성분들이 4 차원 회전군의 [Lie 대수](lie-algebras.md)를 이룬다.
- 수소 원자의 에너지 준위. 양자역학에서 같은 벡터의 작용소판을 쓰면 에너지 준위가 각운동량에 의존하지 않는 축퇴가 설명된다.

# 연관 문서

## 선수지식

- [Kepler 법칙](kepler-laws.md)
- [벡터곱](cross-product.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #differential_geometry #linear_algebra
