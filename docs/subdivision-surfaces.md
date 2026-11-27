# 세분 곡면

# 개요

**세분 곡면(subdivision surface)** 은 다각형 그물의 면을 잘게 나누고 점의 위치를 이웃의 평균으로 고치는 일을 되풀이해 얻는 매끄러운 곡면이다. 정육면체의 여섯 면을 둥근 곡면으로 바꾸고 싶다고 하자. 정육면체의 꼭짓점에는 면이 셋만 모여 격자 모양이 아니므로, 사각형 격자 위에서 정의되는 [B-스플라인](b-splines.md) 곡면 한 장으로는 덮을 수 없다. 세분 곡면은 점마다 이웃의 수에 맞춘 평균 규칙을 정해 두어 이런 그물에도 같은 계산을 되풀이한다.

# 직관

[Chaikin 알고리즘](chaikin-algorithm.md)은 꺾은선의 각 변을 $1:2:1$ 로 나눠 가운데 토막만 남긴다. 사각형 면 하나에 이 일을 가로와 세로로 함께 하면, 꼭짓점 $v$ 쪽의 새 점은 $v$ 에 $9/16$, 이웃한 두 꼭짓점에 $3/16$ 씩, 마주 보는 꼭짓점에 $1/16$ 을 준 평균이다. 세 무게는 $3/4\cdot 3/4$, $3/4\cdot 1/4$, $1/4\cdot 1/4$ 이다.

정육면체 $\lbrack 0,1\rbrack^3$ 의 아랫면 꼭짓점 $(0,0,0)$, $(1,0,0)$, $(1,1,0)$, $(0,1,0)$ 에 적용하면 $(0,0,0)$ 쪽의 새 점은 다음이다.

$$
\frac{9}{16}(0,0,0)+\frac{3}{16}(1,0,0)+\frac{3}{16}(0,1,0)+\frac{1}{16}(1,1,0)=(0.25,0.25,0)
$$

아랫면은 한 변이 $0.5$ 인 가운데 정사각형으로 줄어든다. 여섯 면이 모두 이렇게 줄면 점은 $24$ 개다.

원래 모서리 하나를 사이에 둔 두 면의 새 점 넷을 이으면 사각형이 생기고, 원래 꼭짓점 하나를 둘러싼 세 면의 새 점 셋을 이으면 삼각형이 생긴다. 꼭짓점 $(0,0,0)$ 자리의 삼각형은 $(0.25,0.25,0)$, $(0.25,0,0.25)$, $(0,0.25,0.25)$ 다.

새 그물은 사각형 $6+12$ 개와 삼각형 $8$ 개로 되어 있다. 같은 일을 되풀이하면 사각형이 모인 부분은 Chaikin 알고리즘처럼 2차 곡면으로 수렴하고, 삼각형 여덟 개는 작아지면서 끝까지 남는다. 이 방법이 Doo–Sabin 세분이고, 삼각형처럼 사각형이 아닌 면에 쓰는 무게는 정의 절에 있다.

# 정의

## 다각형 그물

**다각형 그물(polygon mesh)** 은 점의 목록과, 점의 번호를 둘러 가는 순서로 적은 면의 목록이다. 한 점에 모이는 모서리의 수를 그 점의 **차수(valence)** 라 한다.

사각형 그물에서 차수가 $4$ 가 아닌 점을 **특이 꼭짓점(extraordinary vertex)** 이라 하고, 사각형이 아닌 면을 특이 면이라 한다. 특이 꼭짓점도 특이 면도 없는 부분을 정칙(regular)이라 한다. 정육면체의 여덟 꼭짓점은 차수가 $3$ 인 특이 꼭짓점이다.

## 텐서곱 B-스플라인 곡면

제어점이 격자 $P_{ij}$ 로 놓이면 차수 $p$ 의 **[텐서곱](tensor-products.md) B-스플라인 곡면(tensor product B-spline surface)** 은 다음이다.

$$
S(u,v)=\sum_{i}\sum_{j}N_{i,p}(u)\thinspace N_{j,p}(v)\thinspace P_{ij}
$$

$N_{i,p}$ 는 같은 간격 매듭의 B-스플라인 기저 함수다. $p=2$ 이면 쌍2차(biquadratic), $p=3$ 이면 쌍3차(bicubic) 곡면이다. $u$ 를 고정하면 $v$ 에 대한 B-스플라인 곡선이므로, 곡선의 세분 규칙을 두 방향으로 곱하면 곡면의 세분 규칙이 된다.

## Doo–Sabin 세분

**Doo–Sabin 세분(Doo–Sabin subdivision)** 은 $n$ 각형 면의 꼭짓점 $v_0,\dots,v_{n-1}$ 마다 다음 새 점을 만든다[^1].

$$
v_i'=\sum_{j=0}^{n-1}\alpha_{ij}v_j,\qquad \alpha_{ii}=\frac{n+5}{4n},\qquad \alpha_{ij}=\frac{3+2\cos(2\pi(i-j)/n)}{4n}\quad(j\ne i)
$$

새 면은 세 종류다. 원래 면마다 그 면의 새 점 $n$ 개로 된 면, 원래 모서리마다 양쪽 면의 새 점 넷으로 된 사각형, 원래 꼭짓점마다 그 점을 둘러싼 면들의 새 점으로 된 면이다.

$n=4$ 이면 무게가 $9/16$, $3/16$, $1/16$ 로 직관 절의 값이다. 직관 절의 삼각형에 다음 단계를 적용할 때는 $n=3$ 이므로 무게가 $2/3$, $1/6$, $1/6$ 이다.

## Catmull–Clark 세분

**Catmull–Clark 세분(Catmull–Clark subdivision)** 은 다음 세 종류의 점을 만든다[^2].

- 면 점(face point). 면의 꼭짓점들의 평균이다.
- 모서리 점(edge point). 모서리의 두 끝점과 양쪽 면의 면 점, 이 넷의 평균이다.
- 새 꼭짓점. 차수 $n$ 인 꼭짓점 $P$ 를 아래 식의 $P'$ 으로 옮긴다. $F$ 는 $P$ 에 붙은 면들의 면 점의 평균, $R$ 은 $P$ 에 붙은 모서리들의 가운데 점의 평균이다.

$$
P'=\frac{F+2R+(n-3)P}{n}
$$

$n$ 각형 면은 꼭짓점마다 새 꼭짓점, 다음 모서리 점, 면 점, 앞 모서리 점을 이은 사각형 $n$ 개로 나뉜다.

정육면체에서 아랫면의 면 점은 $(0.5,0.5,0)$ 이다. 모서리 $(0,0,0)\text{–}(1,0,0)$ 의 양쪽 면은 아랫면과 앞면 $y=0$ 이고, 앞면의 면 점은 $(0.5,0,0.5)$ 이므로 모서리 점은 다음이다.

$$
\frac{(0,0,0)+(1,0,0)+(0.5,0.5,0)+(0.5,0,0.5)}{4}=(0.5,0.125,0.125)
$$

꼭짓점 $(0,0,0)$ 은 차수가 $3$ 이다. 세 면 점의 평균은 $F=(1/3,1/3,1/3)$ 이고, 세 모서리의 가운데 점 $(0.5,0,0)$, $(0,0.5,0)$, $(0,0,0.5)$ 의 평균은 $R=(1/6,1/6,1/6)$ 이다. $n-3=0$ 이므로 새 꼭짓점은 $(F+2R)/3=(2/9,2/9,2/9)$ 다.

한 단계 뒤의 그물은 점 $8+12+6=26$ 개와 사각형 $24$ 개다.

```javascript
// mesh.points: 좌표 배열, mesh.faces: 점 번호를 둘러 가는 순서로 적은 배열의 배열
// 모든 모서리에 면이 둘씩 붙은 닫힌 그물을 가정한다
function catmullClarkStep(mesh) {
  const { points, faces } = mesh;
  const avg = (ps) => ps[0].map((_, k) => ps.reduce((s, p) => s + p[k], 0) / ps.length);
  const edgeKey = (a, b) => (a < b ? a + "," + b : b + "," + a);

  const facePts = faces.map((f) => avg(f.map((i) => points[i])));
  const edgeFaces = new Map(); // 모서리 → 붙은 면 번호 둘
  faces.forEach((f, fi) =>
    f.forEach((a, k) => {
      const key = edgeKey(a, f[(k + 1) % f.length]);
      if (!edgeFaces.has(key)) edgeFaces.set(key, []);
      edgeFaces.get(key).push(fi);
    }),
  );

  const newPoints = points.map((p, i) => {
    const fs = faces.flatMap((f, fi) => (f.includes(i) ? [facePts[fi]] : []));
    const mids = [...edgeFaces.keys()]
      .map((key) => key.split(",").map(Number))
      .filter(([a, b]) => a === i || b === i)
      .map(([a, b]) => avg([points[a], points[b]]));
    const n = mids.length, F = avg(fs), R = avg(mids);
    return p.map((x, k) => (F[k] + 2 * R[k] + (n - 3) * x) / n);
  });

  const out = [...newPoints];
  const fIdx = facePts.map((q) => out.push(q) - 1);
  const eIdx = new Map();
  for (const [key, [f1, f2]] of edgeFaces) {
    const [a, b] = key.split(",").map(Number);
    eIdx.set(key, out.push(avg([points[a], points[b], facePts[f1], facePts[f2]])) - 1);
  }

  const quads = [];
  faces.forEach((f, fi) =>
    f.forEach((v, k) => {
      const next = f[(k + 1) % f.length];
      const prev = f[(k - 1 + f.length) % f.length];
      quads.push([v, eIdx.get(edgeKey(v, next)), fIdx[fi], eIdx.get(edgeKey(prev, v))]);
    }),
  );
  return { points: out, faces: quads };
}
```

# 성질

## 정칙 부분의 극한

사각형 그물의 정칙 부분에서 Doo–Sabin 세분의 극한은 쌍2차 B-스플라인 곡면이고, Catmull–Clark 세분의 극한은 쌍3차 B-스플라인 곡면이다. 차수 $4$ 인 꼭짓점에서 Catmull–Clark 규칙을 원래 점들의 무게로 풀면 다음 $3\times 3$ 무게가 나온다.

$$
\frac{1}{64}\begin{pmatrix}1&6&1\cr 6&36&6\cr 1&6&1\end{pmatrix}=\begin{pmatrix}1/8\cr 3/4\cr 1/8\end{pmatrix}\begin{pmatrix}1/8&3/4&1/8\end{pmatrix}
$$

가운데 $36/64$ 가 $P$ 의 무게이고, 모서리로 이웃한 넷이 $6/64$, 대각선 쪽 넷이 $1/64$ 다. 이 행렬은 Chaikin 알고리즘 문서의 Lane–Riesenfeld 알고리즘에서 $p=3$ 인 꼭짓점 규칙 $(1/8,3/4,1/8)$ 을 두 방향으로 곱한 것이다. 모서리 점의 무게도 $(1/2,1/2)$ 와 $(1/8,3/4,1/8)$ 의 곱이다.

곡선의 두 규칙은 3차 B-스플라인 곡선의 조각을 반으로 나눈다. 두 방향의 곱은 쌍3차 곡면의 조각을 네 조각으로 나누므로 극한이 그 곡면이다. Doo–Sabin 세분도 같은 논법으로 Chaikin 알고리즘의 곱이고 극한이 쌍2차 곡면이다.

## 특이 꼭짓점

Catmull–Clark 세분을 한 번 하면 모든 면이 사각형이 된다. 그 뒤 새로 생기는 면 점과 모서리 점은 차수가 $4$ 이므로 특이 꼭짓점의 수는 늘지 않고, 특이 꼭짓점 사이의 정칙 부분이 넓어진다. 정육면체에서는 차수 $3$ 인 여덟 점이 끝까지 남는다. Doo–Sabin 세분을 한 번 하면 모든 점의 차수가 $4$ 가 되고, 특이 면의 수가 그대로 남는다.

극한 곡면은 특이 꼭짓점 밖에서 Catmull–Clark 세분이면 두 번, Doo–Sabin 세분이면 한 번 연속 미분 가능하다. 특이 꼭짓점과 특이 면의 중심에서는 두 방법 모두 접평면이 연속이다[^3].

이것을 판정하는 **Reif 판정법(Reif's criterion)** 은 특이 꼭짓점 둘레의 점들에 세분 한 단계를 적용하는 행렬의 고윳값을 본다[^4]. 고윳값이 $1\gt\lambda=\lambda\gt\vert\mu\vert$ 꼴, 곧 $1$ 다음으로 큰 고윳값이 같은 값 둘이고 나머지가 그보다 작으며, 그 두 고유벡터로 만든 평면 사상이 정칙이고 단사이면 극한 곡면은 그 점에서 접평면이 연속이다.

## Euler 지표

세분은 그물의 위상을 바꾸지 않는다. 점, 모서리, 면의 수 $V$, $E$, $F$ 가 바뀌어도 [Euler 지표](euler-characteristic.md) $V-E+F$ 는 같다.

정육면체는 $8-12+6=2$ 다. Catmull–Clark 한 단계 뒤에는 원래 모서리가 둘씩 나뉜 $24$ 개와 면 점에서 모서리 점으로 가는 $24$ 개를 더해 $E=48$ 이고, $26-48+24=2$ 다. 직관 절의 Doo–Sabin 한 단계 뒤에는 $24-48+26=2$ 다.

## Loop 세분

삼각형 그물에는 **Loop 세분(Loop subdivision)** 을 쓴다[^5]. 모서리마다 새 점을 넣어 삼각형 하나를 넷으로 나누고, 새 점은 모서리의 두 끝점에 $3/8$ 씩, 모서리를 낀 두 삼각형의 남은 꼭짓점에 $1/8$ 씩 준 평균이다. 차수 $n$ 인 원래 점 $P$ 는 이웃 $Q_1,\dots,Q_n$ 으로 다음 점이 된다.

$$
P'=(1-n\beta)P+\beta\sum_{k=1}^{n}Q_k,\qquad \beta=\frac1n\left(\frac58-\left(\frac38+\frac14\cos\frac{2\pi}{n}\right)^2\right)
$$

삼각형 그물에서는 차수 $6$ 이 정칙이고, 이때 $\beta=1/16$ 이다. 정칙 부분의 극한은 4차 [상자 스플라인](box-splines.md) 곡면이고 두 번 연속 미분 가능하다.

# 활용

- 애니메이션의 인물 모델. 얼굴과 손처럼 사각형 격자 한 장으로 덮을 수 없는 모양을 거친 그물로 만들고 Catmull–Clark 세분으로 매끄럽게 그린다. DeRose, Kass, Truong 은 표시한 모서리에서 곡선 규칙을 쓰는 날카로운 모서리 규칙을 더해 인물 애니메이션에 썼다[^6].
- 화면 그리기. 거친 그물만 저장하고 그릴 때 몇 단계 세분한다. 정칙 부분은 쌍3차 B-스플라인 조각으로 바로 계산하고, Stam 은 특이 꼭짓점 근처의 극한 곡면을 세분 행렬의 고윳값 분해로 정확히 계산하는 방법을 냈다[^7].
- 삼각형 그물의 평활. 3차원 측정으로 얻은 삼각형 그물을 Loop 세분으로 매끄럽게 하고, 세분의 반대 방향으로 큰 그물을 거친 그물과 단계별 세부로 나누어 저장한다.

[^1]: D. Doo, M. Sabin, "Behaviour of recursive division surfaces near extraordinary points", Computer-Aided Design 10 (1978), 356–360.

[^2]: E. Catmull, J. Clark, "Recursively generated B-spline surfaces on arbitrary topological meshes", Computer-Aided Design 10 (1978), 350–355.

[^3]: J. Peters, U. Reif, Subdivision Surfaces, Springer, 2008.

[^4]: U. Reif, "A unified approach to subdivision algorithms near extraordinary vertices", Computer Aided Geometric Design 12 (1995), 153–174.

[^5]: C. Loop, Smooth Subdivision Surfaces Based on Triangles, 석사 논문, University of Utah, 1987.

[^6]: T. DeRose, M. Kass, T. Truong, "Subdivision surfaces in character animation", Proceedings of SIGGRAPH 98 (1998), 85–94.

[^7]: J. Stam, "Exact evaluation of Catmull–Clark subdivision surfaces at arbitrary parameter values", Proceedings of SIGGRAPH 98 (1998), 395–404.

# 연관 문서

## 선수지식

- [Chaikin 알고리즘](chaikin-algorithm.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #algorithms #differential_geometry
